import { SiYoutube } from 'react-icons/si';
import { AiFillInstagram } from 'react-icons/ai';
import { BiSolidMessageRoundedDots } from 'react-icons/bi';
import { GiPathDistance } from 'react-icons/gi';
import { FaUserGraduate, FaUserTie, FaBookOpenReader, FaPlaneDeparture } from 'react-icons/fa6';
import {
  FaHandsHelping,
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaAward,
  FaBolt,
  FaHeadset,
  FaFileAlt,
  FaChalkboardTeacher,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

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
    link: '/courses',
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

const checkLists = [
  'Guided to best Universities of Japan',
  'Expert Guidance, Global Opportunities.',
  'Study, Grow, Succeed Abroad.',
  'From Nepal to the World.',
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
    href: '/about/introduction',
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
    href: '/contact-us',
  },
];

const ServiceLists = [
  {
    icon: BiSolidMessageRoundedDots,
    title: 'Free Consultation',
    description:
      'Discuss your study goals with our team at no cost and receive expert advice tailored to your journey in Japan.',
    content: [
      'Our free consultation sessions are designed to give students and professionals a clear direction for their future in Japan. During these sessions, we listen to your goals, assess your profile, and guide you toward the best study or career path.',
      'We provide insights into Japanese universities, scholarship options, visa processes, and living conditions—ensuring you have a comprehensive understanding before making any decisions.',
      'Whether you are planning to study, work, or simply explore opportunities, our consultants are here to help you start confidently and avoid common mistakes along the way.',
    ],
  },
  {
    icon: FaBookOpenReader,
    title: 'Japanese Language Course',
    description:
      'Master the Japanese language with our structured courses designed for students, professionals, and business needs.',
    content: [
      'Our Japanese language courses are designed for all proficiency levels, from complete beginners to advanced learners preparing for JLPT. The lessons emphasize practical communication, grammar, and cultural understanding.',
      'Classes are led by qualified instructors who use interactive teaching methods, role-plays, and real-life scenarios to enhance your speaking and comprehension skills.',
      'We also offer flexible schedules, online learning options, and personalized feedback sessions so every learner progresses at their own pace with full support.',
    ],
  },
  {
    icon: FaUserGraduate,
    title: 'Placement in University of Japan',
    description:
      'Get end-to-end guidance for applying, securing admission, and preparing for life at top universities in Japan.',
    content: [
      'We help students identify the right Japanese universities that align with their academic background, financial capacity, and future aspirations.',
      'Our team assists in preparing all required documentation, including application forms, recommendation letters, and study plans, ensuring your submission meets every requirement.',
      'Beyond admission, we also provide pre-departure orientation sessions that prepare you for student life in Japan, covering accommodation, culture, and part-time job options.',
    ],
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Test Preparation',
    description:
      'Boost your success in JLPT, JFT, and NAT-TEST with our focused lessons, practice exams, and expert coaching.',
    content: [
      'Our test preparation programs are designed to help students achieve high scores in major Japanese language proficiency exams like JLPT, JFT, and NAT-TEST.',
      'We provide comprehensive materials, mock tests, and time-based drills that simulate real exam conditions, improving your confidence and accuracy.',
      'With expert instructors and small batch sizes, every student receives personalized attention and guidance to strengthen weaker areas and master test-taking strategies.',
    ],
  },
  {
    icon: GiPathDistance,
    title: 'Career Guidance',
    description:
      'Receive personalized advice to align your strengths with the right career opportunities in Japan’s job market.',
    content: [
      'Our career guidance service connects your skills and interests with the most relevant job and education opportunities in Japan.',
      'We offer one-on-one counseling sessions to help you build a clear career roadmap, including choosing the right courses, industries, and job roles that match your profile.',
      'Additionally, our team provides resume writing support, interview preparation, and cultural training to help you confidently navigate Japan’s competitive job market.',
    ],
  },
  {
    icon: FaPlaneDeparture,
    title: 'Visa Processing for Students',
    description:
      'Navigate the visa process smoothly with our support, from paperwork to final approval, ensuring a stress-free journey.',
    content: [
      'We assist students through every step of the Japanese student visa process, ensuring all required documents are accurate and complete.',
      'Our visa team coordinates with schools and immigration offices, reducing the chance of errors or delays during the application process.',
      'From preparing your Certificate of Eligibility (COE) to final visa stamping, we make the entire process seamless and worry-free so you can focus on your study abroad goals.',
    ],
  },
  {
    icon: FaUserTie,
    title: 'Free Counseling',
    description:
      'Talk to our consultants about your education and career plans and get recommendations that fit your ambitions.',
    content: [
      'Our free counseling sessions are an opportunity for you to discuss your educational background, goals, and concerns with our experienced advisors.',
      'We help you explore multiple options for studying, working, or training in Japan, based on your personal interests and long-term career objectives.',
      'Every counseling session ends with a personalized roadmap—outlining the ideal steps you should take next, from learning Japanese to choosing the right university or course.',
    ],
  },
  {
    icon: FaHandsHelping,
    title: 'Practice Based Classes',
    description:
      'Learn by doing—our interactive classes focus on role plays, conversations, and real-life scenarios for faster improvement.',
    content: [
      'Our practice-based classes emphasize real-world application of Japanese language skills through conversation exercises, mock interviews, and simulations.',
      'We believe in learning by doing—students participate in engaging group activities that enhance fluency, pronunciation, and confidence in speaking Japanese.',
      'By focusing on practical situations such as job interviews, daily interactions, and customer service dialogues, our students gain immediate readiness for life in Japan.',
    ],
  },
  {
    icon: FaFileAlt,
    title: 'Document Translation',
    description:
      'Get accurate and professional Japanese translation for academic, business, and legal documents.',
    content: [
      'We provide certified Japanese translation services for a wide range of documents including academic transcripts, business papers, and legal records.',
      'Our translators ensure linguistic accuracy and cultural sensitivity, maintaining the original meaning while meeting official standards required by institutions in Japan.',
      'Whether it’s for visa applications, university submissions, or corporate use, our fast and reliable translation service guarantees precision and confidentiality.',
    ],
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

// Data for feature cards
const features = [
  {
    id: 1,
    icon: FaUsers,
    title: 'Experienced Faculty',
    desc: 'Our team of highly qualified educators and mentors guide students with dedication and real-world expertise.',
  },
  {
    id: 2,
    icon: FaAward,
    title: 'Quality Education',
    desc: 'We focus on delivering a modern, research-based, and skill-oriented education that shapes successful futures.',
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: 'Trusted Institution',
    desc: 'With years of excellence, we have earned the trust of students, parents, and the academic community alike.',
  },
  {
    id: 4,
    icon: FaBolt,
    title: 'Innovative Learning',
    desc: 'We integrate technology, creativity, and critical thinking to make learning engaging and impactful.',
  },
  {
    id: 5,
    icon: FaClock,
    title: 'Career-Focused Programs',
    desc: 'Our courses are designed to prepare students for real-world careers with practical and industry-relevant knowledge.',
  },
  {
    id: 6,
    icon: FaHeadset,
    title: 'Student Support',
    desc: 'We provide continuous academic and counseling support to ensure every student’s personal and professional growth.',
  },
];

const faqData = [
  {
    question: 'What services does Himalayan Education Institute provide?',
    answer:
      'We offer expert counseling, documentation assistance, and test preparation for students aspiring to study abroad — particularly in Japan, Korea, and other international destinations.',
  },
  {
    question: 'Why should I choose Himalayan Education Institute?',
    answer:
      'We focus on personalized guidance, transparent communication, and experienced mentors who ensure that every student takes the right academic and career path.',
  },
  {
    question: 'Do you provide Japanese language classes?',
    answer:
      'Yes. We offer N5 to N1 level JLPT classes taught by certified instructors using structured and practical teaching methods.',
  },
  {
    question: 'Can you help with student visa processing?',
    answer:
      'Absolutely. Our visa experts handle all required documentation and ensure a smooth, stress-free visa application process for every student.',
  },
  {
    question: 'Where is Himalayan Education Institute located?',
    answer:
      'We are located in the heart of Kathmandu, easily accessible to all students. You can find our exact location and contact details on our Contact Us page.',
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
  checkLists,
  features,
  faqData,
};
