import React, { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ScrollToTop from './components/ScrollToTop';

import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import ServiceDetail from './pages/ServicePage/ServiceDetail';

const Footer = React.lazy(() => import('./components/Footer'));

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
const Courses = React.lazy(() => import('./pages/Courses'));
const N5 = React.lazy(() => import('./pages/Courses/N5'));
const N4 = React.lazy(() => import('./pages/Courses/N4'));
const N3 = React.lazy(() => import('./pages/Courses/N3'));
const N2 = React.lazy(() => import('./pages/Courses/N2'));
const N1 = React.lazy(() => import('./pages/Courses/N1'));
const JFT = React.lazy(() => import('./pages/Courses/JFT'));
const JLPT = React.lazy(() => import('./pages/Courses/JLPT'));
const NAT = React.lazy(() => import('./pages/Courses/NAT'));

// Classes
const Classes = React.lazy(() => import('./components/Classes'));
const JLPTClass = React.lazy(() => import('./pages/Class/JLPT'));
const NATClass = React.lazy(() => import('./pages/Class/NAT'));
const IFTSSW = React.lazy(() => import('./pages/Class/IFTSSW'));

const AboutWrapper = () => {
  const { page } = useParams();

  // Choose which component to render based on the param
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

gsap.registerPlugin(ScrollTrigger);

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
          {/* For Dynamically accesing the service contents */}
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact-us" element={<Contacts />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/n5" element={<N5 />} />
          <Route path="/courses/n4" element={<N4 />} />
          <Route path="/courses/n3" element={<N3 />} />
          <Route path="/courses/n2" element={<N2 />} />
          <Route path="/courses/n1" element={<N1 />} />
          <Route path="/courses/jft" element={<JFT />} />
          <Route path="/courses/jlpt" element={<JLPT />} />
          <Route path="/courses/nat" element={<NAT />} />

          {/* Classes */}
          <Route path="/class" element={<Classes />} />
          <Route path="/class/jlpt" element={<JLPTClass />} />
          <Route path="/class/nat" element={<NATClass />} />
          <Route path="/class/ift-ssw" element={<IFTSSW />} />
        </Routes>
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;
