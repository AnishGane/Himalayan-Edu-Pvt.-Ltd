import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

// About sub-pages
import Message from './pages/About/Message';
import Faq from './pages/About/Faq';
import WhyChooseUs from './pages/About/WhyChooseUs';

// Main pages
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';

// Course pages
import N5 from './pages/Courses/N5';
import N4 from './pages/Courses/N4';
import N3 from './pages/Courses/N3';
import N2 from './pages/Courses/N2';
import N1 from './pages/Courses/N1';
import JFT from './pages/Courses/JFT';
import JLPT from './pages/Courses/JLPT';
import NAT from './pages/Courses/NAT';

// Class pages
import JLPTClass from './pages/Class/JLPT';
import NATClass from './pages/Class/NAT';
import IFTSSW from './pages/Class/IFTSSW';
import Banner from './components/Banner';
import ScrollToTop from './components/ScrollToTop';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <header className="fixed top-0 left-0 z-50 w-full bg-white">
        <Banner />
        <Navbar />
      </header>

      <ScrollToTop />

      {/* Spacer to offset fixed navbar height */}
      <div aria-hidden className="h-[90px] md:h-[100px]" />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About pages */}
        <Route path="/about" element={<About />} />
        <Route path="/about/message" element={<Message />} />
        <Route path="/about/faq" element={<Faq />} />
        <Route path="/about/why-choose-us" element={<WhyChooseUs />} />

        {/* Main pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />

        {/* Course pages */}
        <Route path="/courses/n5" element={<N5 />} />
        <Route path="/courses/n4" element={<N4 />} />
        <Route path="/courses/n3" element={<N3 />} />
        <Route path="/courses/n2" element={<N2 />} />
        <Route path="/courses/n1" element={<N1 />} />
        <Route path="/courses/jft" element={<JFT />} />
        <Route path="/courses/jlpt" element={<JLPT />} />
        <Route path="/courses/nat" element={<NAT />} />

        {/* Class pages */}
        <Route path="/class/jlpt" element={<JLPTClass />} />
        <Route path="/class/nat" element={<NATClass />} />
        <Route path="/class/ift-ssw" element={<IFTSSW />} />
      </Routes>
    </main>
  );
};

export default App;
