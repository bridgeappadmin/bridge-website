import React from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Features from './pages/Features.jsx';
import PricingPage from './pages/PricingPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Careers from './pages/Careers.jsx';
import JobPost from './pages/JobPost.jsx';
import Contact from './pages/Contact.jsx';
import Changelog from './pages/Changelog.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/:slug" element={<JobPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="changelog" element={<Changelog />} />
        <Route path="terms-and-conditions" element={<Legal kind="terms" />} />
        <Route
          path="terms-of-service"
          element={<Navigate to="/terms-and-conditions" replace />}
        />
        <Route path="data-deletion" element={<Legal kind="deletion" />} />
        <Route path="privacy-policy" element={<Legal kind="privacy" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
