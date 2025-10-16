import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useLocation, useParams } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import Footer from './components/Footer';

// Main Pages
const Home = React.lazy(() => import('./pages/Home'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contacts = React.lazy(() => import('./pages/Contacts'));
const Services = React.lazy(() => import('./pages/ServicePage/Services'));
const Courses = React.lazy(() => import('./pages/Courses/Courses'));

// About pages
const Introduction = React.lazy(() => import('./pages/About/Introduction'));
const MessageFromMD = React.lazy(() => import('./pages/About/MessageFromMD'));
const Faq = React.lazy(() => import('./pages/About/Faq'));
const WhyChooseUs = React.lazy(() => import('./pages/About/WhyChooseUs'));

const ServiceDetail = React.lazy(() => import('./pages/ServicePage/ServiceDetail'));
const CourseDetail = React.lazy(() => import('./pages/Courses/CourseDetail'));
const ClassDetails = React.lazy(() => import('./pages/Class/ClassDetails'));

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
    <main className="w-full overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white">
        <Banner />
        <Navbar />
      </header>

      <ScrollToTop />

      {/* Scroll to top on route change */}
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
          <Route path="/class/:classId" element={<ClassDetails />} />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
};

export default App;
