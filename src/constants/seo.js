// All SEO configurations for every page
const BASE_URL = 'https://kgmgroup.co.za';

export const SEO_CONFIG = {
  // HOME PAGE
  home: {
    title: "Kgabo Mokgatla Group | Mining, Exploration & Technical Advisory Services in South Africa",
    description: "100% black-owned South African mining company specializing in coal, chrome, iron, and manganese exploration, project development, and technical advisory services. Operating across Gauteng, Mpumalanga, Limpopo, and Northern Cape.",
    keywords: "Kgabo Mokgatla Group, South Africa mining, coal mining, chrome mining, iron ore, manganese, exploration services, mining operations, BenK Colliery, Rooipoort Colliery, black-owned mining company, Gauteng mining, Mpumalanga mining, technical advisory mining, project development mining",
    canonical: "/",
    ogTitle: "Kgabo Mokgatla Group | Mining, Exploration & Technical Advisory Services",
    ogDescription: "100% black-owned South African mining company specializing in coal, chrome, iron, and manganese exploration, project development, and technical advisory services.",
    ogImage: `${BASE_URL}/og-image.jpg`,
    ogUrl: `${BASE_URL}/`,
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterImage: `${BASE_URL}/twitter-image.jpg`,
    geoRegion: "ZA-GP",
    geoPlacename: "Pretoria, Gauteng",
    geoPosition: "-25.7479;28.2293",
    ICBM: "-25.7479, 28.2293"
  },

  // ABOUT PAGE
  about: {
    title: "About Us | Kgabo Mokgatla Group",
    description: "Learn about Kgabo Mokgatla Group - a 100% black-owned mining company based in Pretoria, specializing in mineral exploration and development across South Africa.",
    keywords: "about Kgabo Mokgatla, black-owned mining company, South African mining, mining history, company values, mining expertise, Pretoria mining company",
    canonical: "/about",
    ogTitle: "About Kgabo Mokgatla Group",
    ogDescription: "Learn about our 100% black-owned mining company based in Pretoria, South Africa.",
    ogImage: `${BASE_URL}/og-about.jpg`,
    ogUrl: `${BASE_URL}/about`,
    ogType: "website"
  },

  // OPERATIONS PAGE
  operations: {
    title: "Mining Operations | Kgabo Mokgatla Group",
    description: "Explore our active mining operations including BenK Colliery, Rooipoort Colliery, and Chrome Wash Plant across Gauteng and Mpumalanga.",
    keywords: "BenK Colliery, Rooipoort Colliery, Chrome Wash Plant, coal mining operations, Bronkhorstspruit mining, mining projects, operational mines, South Africa mining operations",
    canonical: "/operations",
    ogTitle: "Our Mining Operations",
    ogDescription: "Active mining operations including BenK Colliery and Rooipoort Colliery.",
    ogImage: `${BASE_URL}/og-operations.jpg`,
    ogUrl: `${BASE_URL}/operations`,
    ogType: "website"
  },

  // EXPLORATION PAGE
  exploration: {
    title: "Exploration Projects | Kgabo Mokgatla Group",
    description: "Our exploration portfolio spans 9,237 hectares across Gauteng and Mpumalanga, targeting coal, chrome, iron, and manganese commodities.",
    keywords: "mineral exploration, Hetblok, Vischkuil, Valschpruit, Grootspruit, Onspoed, exploration projects South Africa, coal exploration, chrome exploration, mining prospects",
    canonical: "/exploration",
    ogTitle: "Mineral Exploration Projects",
    ogDescription: "9,237 hectares of exploration projects targeting coal, chrome, iron, and manganese.",
    ogImage: `${BASE_URL}/og-exploration.jpg`,
    ogUrl: `${BASE_URL}/exploration`,
    ogType: "website"
  },

  // TEAM PAGE
  team: {
    title: "Our Team | Kgabo Mokgatla Group",
    description: "Meet our executive leadership team - Molefe H. Ratsela (Chairman) and Reolebogile H. Phenya (CEO), driving excellence in South African mining.",
    keywords: "Molefe Ratsela, Reolebogile Phenya, mining leadership, executive team, black-owned mining leadership, mining management, South African mining executives",
    canonical: "/team",
    ogTitle: "Our Executive Leadership Team",
    ogDescription: "Meet Molefe H. Ratsela (Chairman) and Reolebogile H. Phenya (CEO).",
    ogImage: `${BASE_URL}/og-team.jpg`,
    ogUrl: `${BASE_URL}/team`,
    ogType: "website"
  },

  // CONTACT PAGE
  contact: {
    title: "Contact Us | Kgabo Mokgatla Group",
    description: "Get in touch with Kgabo Mokgatla Group. Located in Pretoria, Gauteng. Email: info@kgmgroup.co.za | Phone: +27 (0) 12 004 3942",
    keywords: "contact Kgabo Mokgatla, mining company contact, Pretoria mining, Menlyn Gauteng, mining inquiries, business opportunities, partnership inquiries",
    canonical: "/contact",
    ogTitle: "Contact Kgabo Mokgatla Group",
    ogDescription: "Email: info@kgmgroup.co.za | Phone: +27 (0) 12 004 3942 | Pretoria, Gauteng",
    ogImage: `${BASE_URL}/og-contact.jpg`,
    ogUrl: `${BASE_URL}/contact`,
    ogType: "website"
  },

  // 404 PAGE
  notFound: {
    title: "Page Not Found | Kgabo Mokgatla Group",
    description: "The page you're looking for doesn't exist. Return to Kgabo Mokgatla Group homepage.",
    canonical: "/404",
    noindex: true,
    nofollow: true
  }
};