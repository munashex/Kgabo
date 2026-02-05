import contactImage from '../imgs/contact/contact.jpg'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo';
import { SEO_CONFIG } from '../constants/seo';

const Contact = () => {
    return (
        <>
         <Seo {...SEO_CONFIG.contact} />
        <div className="relative">
            {/* Hero Section */}
            <div className="relative w-full h-100 lg:h-125">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${contactImage})`
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/50 to-black/50"></div>
                </div>
                
                <div className="relative h-full flex items-center px-4 lg:px-16">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white">
                            Get In Touch With Us
                        </h1>
                        
                        <h2 className="text-xl lg:text-2xl font-medium text-white max-w-2xl">
                            Connect With Kgabo Mokgatla Group
                        </h2>
                        
                        <p className="text-lg text-white/90 max-w-xl">
                            Reach out to discuss partnership opportunities, operational inquiries, 
                            or to learn more about our mining projects and exploration portfolio.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Content */}
            <div className="mt-16 lg:mt-28 px-4 lg:px-16">
                <div className="mb-16 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Contact Information
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Email */}
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#004179]/10 rounded-full">
                                    <FaEnvelope className="w-6 h-6 text-[#004179]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Email</h3>
                            </div>
                            <a 
                                href="mailto:info@kgmgroup.co.za"
                                className="text-lg text-gray-700 hover:text-[#004179] transition-colors duration-300"
                            >
                                info@kgmgroup.co.za
                            </a>
                            <p className="text-gray-600 mt-2 text-sm">
                                For general inquiries and partnership discussions
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#004179]/10 rounded-full">
                                    <FaPhone className="w-6 h-6 text-[#004179]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Phone</h3>
                            </div>
                            <a 
                             href="tel:+27120043942" className="text-lg text-gray-700 hover:text-[#004179] transition-colors duration-300">
                                +27 12 004 3942
                            </a>
                            <p className="text-gray-600 mt-2 text-sm">
                                Office hours: Monday - Friday, 8:00 AM - 5:00 PM
                            </p>
                        </div>

                        {/* Location */}
                        <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-6 shadow-sm">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-[#004179]/10 rounded-full">
                                    <FaMapMarkerAlt className="w-6 h-6 text-[#004179]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">Head Office</h3>
                            </div>
                            <div className="text-gray-700">
                                175 Corobay Avenue<br />
                                Menlyn Corporate Park<br />
                                Suite -O Fourth Floor<br />
                                WaterKloof Glen, Pretoria 0181
                            </div>
                            <p className="text-gray-600 mt-2 text-sm">
                                Based in the heart of South Africa's mining industry
                            </p>
                        </div>
                    </div>
                </div>

                {/* Google Maps */}
                <div className="mb-16 lg:mb-24">
                    <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                        Our Location
                    </h2>
                    
                    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="w-5 h-5 text-[#004179]" />
                                <h3 className="text-lg font-bold text-gray-900">Kgabo Mokgatla Group Pty Ltd</h3>
                            </div>
                            <p className="text-gray-600 mt-1">
                                175 Corobay Avenue, Menlyn Corporate Park, Suite -O Fourth Floor. WaterKloof Glen, Pretoria 0181
                            </p>
                        </div>
                        
                        {/* Google Maps Embed */}
                        <div className="w-full h-100 lg:h-125">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4155131204166!2d28.27610157536603!3d-25.7898625472275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9560b91937f563%3A0xfa4604ccb027d53e!2sMenlyn%20Corporate%20Park!5e0!3m2!1sen!2sza!4v1770271993591!5m2!1sen!2sza"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kgabo Mokgatla Group Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Business Hours & Departments */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
                    {/* Business Hours */}
                    <div>
                        <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                            Business Hours
                        </h2>
                        
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <FaClock className="w-5 h-5 text-[#004179]" />
                                <h3 className="text-lg font-bold text-gray-900">Operating Hours</h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-700">Monday - Thursday</span>
                                    <span className="text-gray-900">8:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-700">Friday</span>
                                    <span className="text-gray-900">8:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                                    <span className="font-medium text-gray-700">Saturday</span>
                                    <span className="text-gray-900">Closed</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-medium text-gray-700">Sunday</span>
                                    <span className="text-gray-900">Closed</span>
                                </div>
                            </div>
                            
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <p className="text-gray-600 text-sm">
                                    * Emergency operational inquiries can be directed to our operations team
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Departments */}
                    <div>
                        <h2 className="text-2xl font-bold lg:text-4xl mb-8">
                            Contact Departments
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-5 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Business Development</h3>
                                <p className="text-gray-600 text-sm">
                                    For partnership opportunities and investment inquiries
                                </p>
                            </div>
                            
                            <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-5 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Operations</h3>
                                <p className="text-gray-600 text-sm">
                                    For operational matters, supply chain, and logistics
                                </p>
                            </div>
                            
                            <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-5 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Exploration</h3>
                                <p className="text-gray-600 text-sm">
                                    For geological data and exploration project inquiries
                                </p>
                            </div>
                            
                            <div className="bg-white border-l-4 border-[#004179] rounded-r-lg p-5 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-2">Community Relations</h3>
                                <p className="text-gray-600 text-sm">
                                    For community development and stakeholder engagement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Contact CTA */}
                <div className="bg-linear-to-r from-[#004179] to-[#04b7ef] rounded-lg p-8 lg:p-12 text-white">
                    <div className="text-center">
                        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
                            Ready to Partner With Us?
                        </h2>
                        <p className="text-white/90 max-w-2xl mx-auto mb-8">
                            Whether you're interested in coal supply, exploration partnerships, 
                            or technical advisory services, our team is ready to connect.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a 
                                href="mailto:info@kgmgroup.co.za"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#004179] font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
                            >
                                <FaEnvelope className="w-5 h-5" />
                                <span>Email Us Now</span>
                            </a>
                            
                            <Link 
                                to="/about"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors duration-300"
                            >
                                <span>Learn About Our Operations</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;