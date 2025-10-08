import { FaFacebook } from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FaUserGraduate } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa6';
import { FaBookOpenReader } from 'react-icons/fa6';
import { GiPathDistance } from 'react-icons/gi';
import { FaPlaneDeparture } from 'react-icons/fa6';
import { FaHandsHelping } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const navLinks = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'about',
    subMenu: [
      { name: 'Introduction', link: '/about/introduction' },
      { name: 'Message From MD', link: '/about/message' },
      { name: 'FAQ', link: '/about/faq' },
      { name: 'Why Choose Us?', link: '/about/why-choose-us' },
    ],
  },
  {
    name: 'services',
    link: '/services',
  },
  {
    name: 'our courses',
    subMenu: [
      { name: 'N5 (Basic Level)', link: '/courses/n5' },
      { name: 'N4 (Elementary Level)', link: '/courses/n4' },
      { name: 'N3 (Intermediate Level)', link: '/courses/n3' },
      { name: 'N2 (Upper-Intermediate Level)', link: '/courses/n2' },
      { name: 'N1 (Advanced Level)', link: '/courses/n1' },
      { name: 'JFT (Japan Foundation Test)', link: '/courses/jft' },
      { name: 'Japanese Language Proficiency Test (JLPT)', link: '/courses/jlpt' },
      { name: 'NAT (Nihongo Achievement Test)', link: '/courses/nat' },
    ],
  },
  {
    name: 'class',
    subMenu: [
      {
        name: 'JLPT',
        link: '/class/jlpt',
      },
      {
        name: 'NAT',
        link: '/class/nat',
      },
      {
        name: 'IFT_SSW',
        link: '/class/ift-ssw',
      },
    ],
  },
  {
    name: 'gallery',
    link: '/gallery',
  },
];

const socials = [
  {
    icon: FaFacebook,
    link: 'https://www.facebook.com/',
  },
  {
    icon: FaTwitter,
    link: 'https://twitter.com/',
  },
  {
    icon: AiFillInstagram,
    link: 'https://www.instagram.com/',
  },
  {
    icon: SiYoutube,
    link: 'https://www.youtube.com/',
  },
];

const TestClasses = [
  {
    id: 1,
    title: 'NAT',
    link: '/class/nat',
    image: '/images/carousel_img4.jpg',
  },
  {
    id: 2,
    title: 'JLPT',
    link: '/class/jlpt',
    image: '/images/carousel_img1.jpg',
  },
  {
    id: 3,
    title: 'IFT_SSW',
    link: '/class/ift-ssw',
    image: '/images/carousel_img2.jpg',
  },
];

const CarouselSlides = [
  {
    src: '/images/carousel_img1.jpg',
    tagline: 'Study in best environment',
    subtitle: 'Guiding you to your dream university',
    headline: 'Fulfill your Dream here.',
    cta: 'Learn More',
    href: '/about',
  },
  {
    src: '/images/carousel_img2.jpg',
    tagline: 'Trusted by thousands',
    subtitle: 'Building brighter futures abroad',
    headline: 'Your journey starts with us.',
    cta: 'Explore Now',
    href: '/services',
  },
  {
    src: '/images/carousel_img3.jpg',
    tagline: 'Expert guidance',
    subtitle: 'Personalized counseling for every student',
    headline: 'Achieve journey with us together.',
    cta: 'Get Started',
    href: '/contacts',
  },
];

const ServiceLists = [
  {
    icon: BiSolidMessageRoundedDots,
    title: 'Free Consultation',
    description:
      'Discuss your study goals with our team at no cost and receive expert advice tailored to your journey in Japan.',
  },
  {
    icon: FaBookOpenReader,
    title: 'Japanese Language Course',
    description:
      'Master the Japanese language with our structured courses designed for students, professionals, and business needs.',
  },
  {
    icon: FaUserGraduate,
    title: 'Placement in University of Japan',
    description:
      'Get end-to-end guidance for applying, securing admission, and preparing for life at top universities in Japan.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Test Preparation',
    description:
      'Boost your success in JLPT, JFT, and NAT-TEST with our focused lessons, practice exams, and expert coaching.',
  },
  {
    icon: GiPathDistance,
    title: 'Career Guidance',
    description:
      'Receive personalized advice to align your strengths with the right career opportunities in Japan’s job market.',
  },
  {
    icon: FaPlaneDeparture,
    title: 'Visa Processing for Students',
    description:
      'Navigate the visa process smoothly with our support, from paperwork to final approval, ensuring a stress-free journey.',
  },
  {
    icon: FaUserTie,
    title: 'Free Counseling',
    description:
      'Talk to our consultants about your education and career plans and get recommendations that fit your ambitions.',
  },
  {
    icon: FaHandsHelping,
    title: 'Practice Based Classes',
    description:
      'Learn by doing—our interactive classes focus on role plays, conversations, and real-life scenarios for faster improvement.',
  },
  {
    icon: FaFileAlt,
    title: 'Document Translation',
    description:
      'Get accurate and professional Japanese translation for academic, business, and legal documents.',
  },
];

const testimonials = [
  {
    name: 'Ayumi Tanaka',
    major: 'Computer Science Student',
    image: '/images/carousel_img2.jpg',
    text: 'Studying with Asahi helped me not only learn Japanese but also adjust quickly to life in Japan. The support was incredible!',
  },
  {
    name: 'Raj Sharma',
    major: 'Business Administration',
    image: '/images/carousel_img2.jpg',
    text: 'Thanks to the guidance, I secured admission at my dream university in Tokyo. Their process was seamless and stress-free.',
  },
  {
    name: 'Sakura Ito',
    major: 'Engineering',
    image: '/images/carousel_img2.jpg',
    text: 'The Japanese language classes were engaging and practical. I felt confident to communicate during my exchange program.',
  },
  {
    name: 'Prakash Karki',
    major: 'Hospitality Management',
    image: '/images/carousel_img2.jpg',
    text: 'Visa processing was smooth, and the career counseling helped me find the right path. Truly life-changing experience!',
  },
];

const OurTeamData = [
  {
    image: '/images/carousel_img4.jpg',
    name: 'Raj Sharma',
    post: 'Business Administration',
  },
  {
    image: '/images/carousel_img3.jpg',
    name: 'Raj Sharma',
    post: 'Business Administration',
  },
  {
    image: '/images/carousel_img4.jpg',
    name: 'Raj Sharma',
    post: 'Business Administration',
  },
];

const galleryData = [
  {
    id: 1,
    image: '/images/carousel_img1.jpg',
  },
  {
    id: 2,
    image: '/images/carousel_img2.jpg',
  },
  {
    id: 3,
    image: '/images/carousel_img3.jpg',
  },
  {
    id: 4,
    image: '/images/carousel_img4.jpg',
  },
];

export {
  navLinks,
  galleryData,
  OurTeamData,
  TestClasses,
  socials,
  CarouselSlides,
  ServiceLists,
  testimonials,
};
