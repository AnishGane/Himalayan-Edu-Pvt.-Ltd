import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import ServiceDetail from './pages/ServicePage/ServiceDetail';

// const Footer = React.lazy(() => import('./components/Footer'));
import Footer from './components/Footer'; // ⬅️ Normal import (fast!)
import CourseDetail from './pages/Courses/CourseDetail';

// Lazy-loaded pages
const Home = React.lazy(() => import('./pages/Home'));

// About pages
const Introduction = React.lazy(() => import('./pages/About/Introduction'));
const MessageFromMD = React.lazy(() => import('./pages/About/MessageFromMD'));
const Faq = React.lazy(() => import('./pages/About/Faq'));
const WhyChooseUs = React.lazy(() => import('./pages/About/WhyChooseUs'));

// Main pages
const Services = React.lazy(() => import('./pages/ServicePage/Services'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contacts = React.lazy(() => import('./pages/Contacts'));

// Courses
const Courses = React.lazy(() => import('./pages/Courses/Courses'));

// Classes
const Classes = React.lazy(() => import('./components/Classes'));
const JLPTClass = React.lazy(() => import('./pages/Class/JLPT'));
const NATClass = React.lazy(() => import('./pages/Class/NAT'));
const IFTSSW = React.lazy(() => import('./pages/Class/IFTSSW'));

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

const AboutWrapper = () => {
  const { page } = useParams();

  switch (page) {
    case 'introduction':
      return <Introduction />;
    case 'message':
      return <MessageFromMD />;
    case 'faq':
      return <Faq />;
    case 'why-choose-us':
      return <WhyChooseUs />;
    default:
      return <div>Page not found</div>;
  }
};

const App = () => {
  return (
    <main>
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white">
        <Banner />
        <Navbar />
      </header>

      {/* Scroll to top on route change */}
      <ScrollToTop />

      <ScrollToTopOnRouteChange />

      {/* Spacer to offset fixed navbar height */}
      <div aria-hidden className="h-[90px] md:h-[100px]" />

      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about/:page" element={<AboutWrapper />} />

          {/* Main Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contacts />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />

          {/* Classes */}
          <Route path="/class" element={<Classes />} />
          <Route path="/class/jlpt" element={<JLPTClass />} />
          <Route path="/class/nat" element={<NATClass />} />
          <Route path="/class/ift-ssw" element={<IFTSSW />} />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
};

export default App;
