import { useEffect } from 'react';

/**
 * Dynamic SEO Component
 * Updates meta tags for each page
 * Usage: <Seo {...SEO_CONFIG.home} />
 */
const Seo = ({ 
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterImage,
  geoRegion,
  geoPlacename,
  geoPosition,
  ICBM,
  noindex = false,
  nofollow = false
}) => {
  useEffect(() => {
    // 1. UPDATE DOCUMENT TITLE
    if (title) {
      document.title = title;
    }

    // 2. HELPER FUNCTION TO UPDATE/CREATE META TAGS
    const updateMetaTag = (property, content, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${property}"]`);
      
      // Create element if it doesn't exist
      if (!element && content) {
        element = document.createElement('meta');
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      
      // Update content if element exists
      if (element && content) {
        element.setAttribute('content', content);
      }
      
      return element;
    };

    // 3. UPDATE BASIC META TAGS
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // 4. UPDATE ROBOTS META TAG
    if (noindex || nofollow) {
      const robotsValue = `${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`;
      updateMetaTag('robots', robotsValue);
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // 5. UPDATE GEO TAGS
    updateMetaTag('geo.region', geoRegion);
    updateMetaTag('geo.placename', geoPlacename);
    updateMetaTag('geo.position', geoPosition);
    updateMetaTag('ICBM', ICBM);

    // 6. UPDATE OPEN GRAPH TAGS
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', ogUrl || `https://kgmgroup.co.za${canonical || '/'}`, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'Kgabo Mokgatla Group', true);
    updateMetaTag('og:locale', 'en_ZA', true);

    // 7. UPDATE TWITTER CARD TAGS
    updateMetaTag('twitter:card', twitterCard, true);
    updateMetaTag('twitter:title', ogTitle || title, true);
    updateMetaTag('twitter:description', ogDescription || description, true);
    updateMetaTag('twitter:image', twitterImage || ogImage, true);
    updateMetaTag('twitter:url', ogUrl || `https://kgmgroup.co.za${canonical || '/'}`, true);

    // 8. UPDATE CANONICAL LINK
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `https://kgmgroup.co.za${canonical || '/'}`);

    // 9. UPDATE STRUCTURED DATA
    const updateStructuredData = () => {
      // Remove existing structured data
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (!script.hasAttribute('data-default')) {
          script.remove();
        }
      });

      // Add page-specific structured data
      const pageJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': title,
        'description': description,
        'url': `https://kgmgroup.co.za${canonical || '/'}`,
        'isPartOf': {
          '@type': 'WebSite',
          'name': 'Kgabo Mokgatla Group',
          'url': 'https://kgmgroup.co.za'
        }
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(pageJsonLd);
      document.head.appendChild(script);
    };

    updateStructuredData();

    // Cleanup function (optional)
    return () => {
      // Reset to defaults if needed when component unmounts
    };
  }, [
    title, description, keywords, canonical, 
    ogTitle, ogDescription, ogImage, ogUrl, ogType,
    twitterCard, twitterImage, geoRegion, geoPlacename,
    geoPosition, ICBM, noindex, nofollow
  ]);

  // This component doesn't render anything visible
  return null;
};

export default Seo;