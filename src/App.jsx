import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RootLayout from './app/Layout';

// Pages
import Home from './app/page';
import AboutPage from './app/about/page';
import BlogMainPage from './app/blog/page';
import BlogDetails from './app/blog/[url]/page';
import ContactPage from './app/contact/page';
import Payment from './app/pay/page';
import Portfolio from './app/portfolio/page';
import PrivacyPolicy from './app/privacy-policy/page';
import Services from './app/services/page';
import Thanks from './app/thank-you/page';
import TermsandCondition from './app/terms-and-conditions/page';
import Custom404 from './app/not-found';

// Service sub-pages
import ServiceDigitalMarketing from './app/services/digital-marketing/page';
import ServiceEcommerce from './app/services/e-commerce/page';
import ServiceFinance from './app/services/finance-and-accounting/page';
import ServiceGraphicDesign from './app/services/graphic-design/page';
import ServiceMobileApp from './app/services/mobile-app-development/page';
import ServicePayPerClick from './app/services/pay-per-click/page';
import ServiceRealEstate from './app/services/real-estate-virtual-assistant/page';
import ServiceSEO from './app/services/search-engine-optimization/page';
import ServiceSocialMedia from './app/services/social-media-marketing/page';
import ServiceStartUpBundle from './app/services/start-up-bundle/page';
import ServiceVirtualAssistant from './app/services/virtual-assistant/page';
import ServiceWebDev from './app/services/web-development/page';

// Webinar
import WebinarPage from './app/webinar/page';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogMainPage />} />
        <Route path="/blog/:url" element={<BlogDetails />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="/terms-and-conditions" element={<TermsandCondition />} />
        <Route path="/webinar" element={<WebinarPage />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/digital-marketing" element={<ServiceDigitalMarketing />} />
        <Route path="/services/e-commerce" element={<ServiceEcommerce />} />
        <Route path="/services/finance-and-accounting" element={<ServiceFinance />} />
        <Route path="/services/graphic-design" element={<ServiceGraphicDesign />} />
        <Route path="/services/mobile-app-development" element={<ServiceMobileApp />} />
        <Route path="/services/pay-per-click" element={<ServicePayPerClick />} />
        <Route path="/services/real-estate-virtual-assistant" element={<ServiceRealEstate />} />
        <Route path="/services/search-engine-optimization" element={<ServiceSEO />} />
        <Route path="/services/social-media-marketing" element={<ServiceSocialMedia />} />
        <Route path="/services/start-up-bundle" element={<ServiceStartUpBundle />} />
        <Route path="/services/virtual-assistant" element={<ServiceVirtualAssistant />} />
        <Route path="/services/web-development" element={<ServiceWebDev />} />

        {/* Redirects (from next.config) */}
        <Route path="/services/social-media-management" element={<Navigate to="/services/social-media-marketing" replace />} />
        <Route path="/services/social-media" element={<Navigate to="/services/social-media-marketing" replace />} />
        <Route path="/services/real-estate" element={<Navigate to="/services/real-estate-virtual-assistant" replace />} />

        {/* 404 */}
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </RootLayout>
  );
}

export default App;
