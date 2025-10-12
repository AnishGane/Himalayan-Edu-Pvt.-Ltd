import React from 'react';
import { FaShieldAlt, FaUsers, FaClock, FaAward, FaBolt, FaHeadset } from 'react-icons/fa';
import StyledHeading from '../../components/StyleHeading';
import ChooseUsCard from '../../components/ChooseUsCard';

// Data for feature cards
const features = [
  {
    icon: <FaUsers className="text-cta-red size-11" />,
    title: 'Experienced Faculty',
    desc: 'Our team of highly qualified educators and mentors guide students with dedication and real-world expertise.',
  },
  {
    icon: <FaAward className="text-main-indigo size-11" />,
    title: 'Quality Education',
    desc: 'We focus on delivering a modern, research-based, and skill-oriented education that shapes successful futures.',
  },
  {
    icon: <FaShieldAlt className="text-cta-red size-11" />,
    title: 'Trusted Institution',
    desc: 'With years of excellence, we have earned the trust of students, parents, and the academic community alike.',
  },
  {
    icon: <FaBolt className="text-main-indigo size-11" />,
    title: 'Innovative Learning',
    desc: 'We integrate technology, creativity, and critical thinking to make learning engaging and impactful.',
  },
  {
    icon: <FaClock className="text-cta-red size-11" />,
    title: 'Career-Focused Programs',
    desc: 'Our courses are designed to prepare students for real-world careers with practical and industry-relevant knowledge.',
  },
  {
    icon: <FaHeadset className="text-main-indigo size-11" />,
    title: 'Student Support',
    desc: 'We provide continuous academic and counseling support to ensure every student’s personal and professional growth.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why_choose_us" className="mb-12">
      {/* Heading */}
      <StyledHeading text="Why Choose Us" />

      {/* Subheading */}
      <p className="mb-8 w-full max-w-2xl text-[14px] text-gray-600 md:text-base">
        We believe in delivering excellence with passion and precision. Here’s why our clients trust
        us and keep coming back.
      </p>

      {/* Features Grid */}
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <ChooseUsCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
