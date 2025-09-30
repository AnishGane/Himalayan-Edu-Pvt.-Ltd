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
      { name: 'About Us', link: '/about' },
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
  },
  {
    id: 2,
    title: 'JLPT',
  },
  {
    id: 3,
    title: 'IFT_SSW',
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
      'Get a free consultation from our experts to understand your needs and goals for your future studies in Japan.',
  },
  {
    icon: FaBookOpenReader,
    title: 'Japanese Language Course',
    description:
      'Asahi has designed special curriculum with the latest and the most effective teaching methods for students and businessmen.',
  },
  {
    icon: FaUserGraduate,
    title: 'Placement in University of Japan',
    description:
      'We offer comprehensive placement assistance for students aiming to study in Japan.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Test Preparation',
    description:
      'At Asahi Japanese Consultancy, we offer expert test preparation services for a range of Japanese language proficiency exams like JLPT, JFT and NAT-TEST.',
  },
  {
    icon: GiPathDistance,
    title: 'Career Guidance',
    description:
      'We guide you through the process of choosing a career path that aligns with your strengths and skills within the Japanese job market.',
  },
  {
    icon: FaPlaneDeparture,
    title: 'Visa processing for students',
    description:
      'We provide personalized counseling to help you understand the specific visa type that best suits your purpose.',
  },
  {
    icon: FaUserTie,
    title: 'Free Counseling',
    description:
      'Our expert consultants are here to provide personalized guidance, whether you’re just starting your language learning journey or looking to improve your skills.',
  },
  {
    icon: FaHandsHelping,
    title: 'Practice based Classes',
    description:
      'Our classes are designed to engage students actively through role-playing, conversation practice',
  },
  {
    icon: FaFileAlt,
    title: 'Document Translation',
    description:
      'Need the best Japanese translators? Our Japanese translation services offer decades of experience in Japanese translations.',
  },
];

export { navLinks, TestClasses, socials, CarouselSlides, ServiceLists };
