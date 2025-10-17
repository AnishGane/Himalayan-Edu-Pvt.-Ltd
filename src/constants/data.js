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
      { name: 'N5 (Basic Level)', link: '/courses/n5-basic-level' },
      { name: 'N4 (Elementary Level)', link: '/courses/n4-elementary-level' },
      { name: 'N3 (Intermediate Level)', link: '/courses/n3-intermediate-level' },
      { name: 'N2 (Upper-Intermediate Level)', link: '/courses/n2-upper-intermediate-level' },
      { name: 'N1 (Advanced Level)', link: '/courses/n1-advanced-level' },
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
        name: 'IFT-SSW',
        link: '/class/ift-ssw',
      },
      {
        name: 'EPS Topik UBT',
        link: '/class/eps-topik-ubt',
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
    image: '/images/carousel_img5.jpeg',
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
    image: '/images/carousel_img5.jpeg',
    name: 'Raj Sharma',
    post: 'Business Administration',
  },
  {
    image: '/images/carousel_img2.jpg',
    name: 'Raj Sharma',
    post: 'Business Administration',
  },
  {
    image: '/images/carousel_img5.jpeg',
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
    image: '/images/carousel_img5.jpeg',
  },
];

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

const courses = [
  {
    id: 'n5-basic-level',
    title: 'N5 (Basic Level)',
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'N5 is the entry-level of the JLPT, aimed at complete beginners. It focuses on very basic Japanese used in daily life, such as greetings, telling the time, numbers, and basic questions. You will learn around 800 vocabulary words, 100 kanji characters, and fundamental grammar patterns. The grammar includes basic sentence structure (subject + object + verb), particles like は, を, に, and で, and basic verb conjugations like present and past tense. The listening section involves short conversations in a classroom or shopping context, spoken slowly. Reading materials include simple sentences in hiragana, katakana, and very basic kanji. Passing N5 shows you can handle simple interactions in Japanese.',
    schedule: [
      {
        duration: '4 Months',
        Study_Time: '2 hours per day',
      },
    ],
    Outcomes: [
      {
        name: 'Reading',
        description: 'Can comprehend everyday written and spoken Japanese.',
      },
      {
        name: 'Writing',
        description: 'Can write simple sentences using basic grammar and kanji.',
      },
      {
        name: 'Listening',
        description: 'Can understand simple conversations spoken slowly.',
      },
    ],
    subDetail:
      'This level is typically reached after studying Japanese for approximately 150 hours and is perfect for those looking to build a solid foundation in the language. ',
  },
  {
    id: 'n4-elementary-level',
    title: 'N4 (Elementary Level)',
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'N4 builds on the foundation of N5, expanding vocabulary to about 1,500 words and 300 kanji. Grammar at this level includes more verb forms (te-form, nai-form, ta-form), casual and polite forms, and basic sentence patterns involving giving/receiving, comparisons, and expressing desire or obligation. Listening involves longer conversations and short dialogues in everyday contexts. Reading includes short passages, notices, and messages using basic grammar and familiar kanji. N4 certifies that you can participate in simple everyday conversations and understand essential written and spoken material related to personal life, school, and work.',
    schedule: [
      {
        duration: '4 Months',
        study_Time: '2 hours per day',
      },
    ],
    Outcomes: [
      {
        name: 'Reading',
        description: 'Can read short texts and understand everyday written Japanese.',
      },
      {
        name: 'Writing',
        description: 'Can write simple paragraphs using basic kanji and vocabulary.',
      },
      {
        name: 'Listening',
        description: 'Can follow conversations spoken at normal slow pace.',
      },
    ],
    subDetail:
      'Level N4 is typically reached after 300 hours of study and is great for students who wish to improve their communication in everyday situations.',
  },
  {
    id: 'n3-intermediate-level',
    title: 'N3 (Intermediate Level)',
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'N3 is the transitional level between basic and advanced Japanese. Vocabulary increases significantly to around 3,750 words and 650 kanji. You’ll master complex grammar structures like passive, causative, potential, conditional, and commonly used expressions. You’ll also learn how to handle keigo (honorific language) at a basic level. Listening comprehension requires understanding longer conversations, announcements, and interviews at near-natural speed. Reading includes short essays, reviews, advertisements, and news excerpts. N3-level students can handle practical everyday situations and begin to understand nuanced ideas, although full fluency is not expected.',
    schedule: [
      {
        duration: '6 Months',
        study_Time: '2 hours per day',
      },
    ],
    Outcomes: [
      {
        name: 'Reading',
        description: 'Can understand short essays and common texts.',
      },
      {
        name: 'Writing',
        description: 'Can write structured paragraphs with correct grammar.',
      },
      {
        name: 'Listening',
        description: 'Can comprehend natural-speed speech on everyday topics.',
      },
    ],
    subDetail:
      'This level is typically reached after 450hours of study and provides the foundation for intermediate fluency in Japanese.',
  },
  {
    id: 'n2-upper-intermediate-level',
    title: 'N2 (Upper-Intermediate Level)',
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'N2 is the level most employers and universities in Japan require. It involves around 6,000 vocabulary words, 1,000 kanji, and mastery of advanced grammar. You’ll use keigo more naturally, understand differences between formal and informal expressions, and interpret implied meanings. The listening section includes business conversations, lectures, and everyday discussions at natural speed. Reading includes news articles, essays, instruction manuals, and opinion pieces. Successfully passing N2 means you can study or work in Japanese-speaking environments, follow the news, and participate in advanced conversations.',
    schedule: [
      {
        duration: '6 Months',
        study_Time: '2 hours per day',
      },
    ],
    Outcomes: [
      {
        name: 'Reading',
        description: 'Can read and understand complex articles and manuals.',
      },
      {
        name: 'Writing',
        description: 'Can write formal and complex texts correctly.',
      },
      {
        name: 'Listening',
        description: 'Can understand lectures and conversations at normal pace.',
      },
    ],
    subDetail:
      'Level N2 is typically reached after 600hours of study and prepares you for higher-level academic or professional pursuits in Japan.',
  },
  {
    id: 'n1-advanced-level',
    title: 'N1 (Advanced Level)',
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'N1 is the most difficult and prestigious level. It expects knowledge of over 10,000 vocabulary words and approximately 2,000 kanji. You’ll need to interpret complex grammar, nuanced writing, and high-level vocabulary. The listening section is especially challenging, featuring fast-paced speech, abstract discussions, and varying speech styles. The reading section includes academic essays, editorials, legal texts, and literature. N1 requires deep cultural understanding and mastery of formal Japanese used in government, academia, and professional settings. It is often required for jobs in translation, international business, or academic research in Japan.',
    schedule: [
      {
        duration: '6 Months',
        study_Time: '2 hours per day',
      },
    ],
    Outcomes: [
      {
        name: 'Reading',
        description: 'Can comprehend complex texts in various contexts.',
      },
      {
        name: 'Writing',
        description: 'Can write advanced texts using appropriate grammar and vocabulary.',
      },
      {
        name: 'Listening',
        description: 'Can understand fast speech and nuanced conversations.',
      },
    ],
    subDetail:
      'Level N1 is achieved after approximately 900hours of study and prepares you for professional or academic pursuits in Japan.',
  },
  {
    id: 'jft',
    title: 'JFT',
    hasButtonLink: true,
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'The JFT is designed for learners who wish to assess their Japanese proficiency in practical, real-world contexts, particularly for those planning to study, work, or live in Japan. At Asahi, we offer preparation courses for all levels of the JFT, from A1 through B1, to ensure you build a strong foundation and progress steadily in your language skills.',
    Levels: [
      {
        levelId: 'A1',
        levelTitle: 'JFT A1 Preparation Course (Beginner Level)',
        levelDescription:
          'A1 is the beginner level of the JFT, aimed at learners who are just starting to learn Japanese. This course will cover the basics of the language and introduce you to essential vocabulary, grammar, and kanji.',
        keyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
      {
        levelId: 'A2',
        levelTitle: 'JFT A2 Preparation Course (Elementary Level)',
        levelDescription:
          'A2 is the elementary level of the JFT and is for learners who have a basic understanding of Japanese and wish to build upon it. This course will help you communicate in everyday situations more comfortably.',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
      {
        levelId: 'B2',
        levelTitle: 'JFT B2 Preparation Course (Basic Level)',
        levelDescription:
          'B2 is the elementary level of the JFT and is for learners who have a basic understanding of Japanese and wish to build upon it. This course will help you communicate in everyday situations more comfortably.',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
    ],
  },
  {
    id: 'jlpt',
    title: 'JLPT',
    hasButtonLink: true,
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'Japanese Language Proficiency Test in Nepal  is your gateway to study, work, and live in Japan with confidence. At, Asahi we offer structured and progressive curriculum to help you master the Japanese language from beginner to advanced levels. Whether you are looking to communicate effectively in Japanese, prepare for the Japanese Language Proficiency Test (JLPT), or gain a deeper understanding of the language for personal or professional growth, our courses are designed to meet your needs. Explore our levels below, and start your journey to fluency in Japanese today! ',
    Levels: [
      {
        levelId: 'jlpt-level-n5',
        levelTitle: 'Level N5 – Beginner Japanese',
        levelDescription:
          'Our Level N5 course is ideal for those starting their Japanese language journey. In this course, you will learn the basics of grammar, acquire essential vocabulary, and begin reading and writing simple sentences. You’ll master 100kanji characters and around 800words, enabling you to engage in basic conversations and understand everyday written Japanese.  ',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
        levelSubDetails:
          'This level is typically reached after studying Japanese for approximately 150 hours and is perfect for those looking to build a solid foundation in the language.',
      },
      {
        levelId: 'jlpt-level-n4',
        levelTitle: 'Level N4 – Elementary Japanese',
        levelDescription:
          'The Level N4 course helps you build on the foundation of Level N5. You will learn 300 kanji characters and expand your vocabulary to around 1500 words. At this level, you will be able to take part in everyday conversations and read and write simple passages on familiar topics. ',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '4 months (16 weeks)',
        studyTime: '2 hours of a day',
        levelSubDetails:
          'Level N4 is typically reached after 300 hours of study and is great for students who wish to improve their communication in everyday situations.',
      },
      {
        levelId: 'jlpt-level-n3',
        levelTitle: 'Level N3 – Lower Intermediate Japanese',
        levelDescription:
          'In Level 3, you will deepen your understanding of grammar and expand your vocabulary. You will learn 600 kanji characters and 3750words, enabling you to participate more confidently in conversations, as well as read and understand moderately difficult written content. ',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '4 months (16 weeks)',
        studyTime: '2 hours of a day',
        levelSubDetails:
          'This level is typically reached after 450 hours of study and provides the foundation for intermediate fluency in Japanese.',
      },
      {
        levelId: 'jlpt-level-n2',
        levelTitle: 'Level N2 – Upper Intermediate Japanese',
        levelDescription:
          'At Level N2, you will acquire an advanced understanding of grammar and vocabulary, learning 1000kanji characters and 6000words. This level will help you read more complex materials and engage in more sophisticated conversations, enhancing your fluency.',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '4 months (16 weeks)',
        studyTime: '2 hours of a day',
        levelSubDetails:
          'Level N2 is typically reached after 600 hours of study and prepares you for higher-level academic or professional pursuits in Japan.',
      },
      {
        levelId: 'jlpt-level-n1',
        levelTitle: 'Level N1 – Advanced Japanese',
        levelDescription:
          'Level N1 represents the pinnacle of Japanese language proficiency. At this advanced level, you will learn 2000kanji characters and 10000words, allowing you to engage with complex materials in Japanese society. You’ll gain the ability to read and comprehend abstract and logical content in various fields, from literature to business.',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '4 months (16 weeks)',
        studyTime: '2 hours of a day',
        levelSubDetails:
          'Level N1 is achieved after approximately 900hours of study and prepares you for professional or academic pursuits in Japan.',
      },
    ],
  },
  {
    id: 'nat',
    title: 'NAT',
    hasButtonLink: true,
    courseDetails: [
      '800 words, 100 kanji, basic grammer and sentences',
      'Read, listen, & speak simple daily japanese',
      '4 months, 2hours/day (150 hours total)',
    ],
    details:
      'The NAT (Nihongo Proficiency Test) is an internationally recognized Japanese language test that evaluates language proficiency across five levels: N5 (beginner) to N1 (advanced). Asahi Japanese Language and Culture Center offers tailored courses for each level, helping students to progress at their own pace and achieve success on the test.',
    Levels: [
      {
        levelId: 'nat-n5',
        levelTitle: 'NAT N5 Preparation Course (Beginner Level)',
        levelDescription:
          'N5 is the introductory level for learners who are new to the Japanese language. This course will introduce you to the basics of Japanese, including simple grammar, vocabulary, and kanji.',
        KeyAreas: [
          'Basic vocabulary and everyday expressions (greetings, numbers, etc.)',
          'Simple grammar and sentence structure',
          'Introduction to Hiragana, Katakana, and basic kanji (around 50 characters)',
          'Listening practice with simple dialogues and instructions',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
      {
        levelId: 'nat-n4',
        levelTitle: 'NAT N4 Preparation Course (Elementary Level)',
        levelDescription:
          'N4 is for learners who have mastered the basics of Japanese and wish to improve their proficiency. This course will focus on expanding your vocabulary and grammar, preparing you for more complex conversations.',
        KeyAreas: [
          'Intermediate vocabulary and grammar structures (past tense, te-form)',
          'Kanji practice (around 300 characters)',
          'Listening comprehension with conversations related to daily life, travel, etc.',
          'Reading comprehension with short passages and notices',
          'Writing and constructing simple sentences',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
      {
        levelId: 'nat-n3',
        levelTitle: 'NAT N3 Preparation Course (Intermediate Level)',
        levelDescription:
          'N3 is for learners who have a basic understanding of Japanese and are looking to progress to an intermediate level. This course will focus on more advanced grammar, vocabulary, and kanji.',
        KeyAreas: [
          'Advanced vocabulary for a wide range of topics',
          'Intermediate grammar structures (comparisons, conditionals, etc.)',
          'Kanji practice (around 600 characters)',
          'Listening practice with intermediate-level conversations, news, and interviews',
          'Reading comprehension with passages on various topics',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
      {
        levelId: 'nat-n2',
        levelTitle: 'NAT N2 Preparation Course (Advanced Level)',
        levelDescription:
          'N2 is an advanced level of proficiency, for students who are comfortable with Japanese and wish to refine their skills for more professional or academic purposes. This course is for learners preparing for complex conversations and written Japanese.',
        KeyAreas: [
          'High-level vocabulary, idiomatic expressions, and formal language',
          'Advanced grammar structures (keigo, complex sentence patterns)',
          'Kanji practice (around 1,000 characters)',
          'Listening comprehension with academic and formal content',
          'Reading comprehension with news articles, essays, and reports',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
      {
        levelId: 'nat-n1',
        levelTitle: 'NAT N1 Preparation Course (Proficient Level)',
        levelDescription:
          'N1 is the highest level of proficiency and tests the ability to use Japanese in highly sophisticated, professional, and academic settings. This course will focus on refining your language skills for fluency in both written and spoken Japanese.',
        KeyAreas: [
          'Expert-level vocabulary, including specialized terms in business, science, and literature',
          'Complex grammar and sentence structures',
          'Kanji practice (around 2,000 characters)',
          'Listening practice with lectures, interviews, and debates',
          'Reading comprehension with academic texts, formal writing, and nuanced materials',
        ],
        courseDuration: '3 months (12 weeks)',
        studyTime: '2 to 3 hours of class / week + 3 to 4 hours of self-study / week',
      },
    ],
  },
];

const classes = [
  {
    id: 'jlpt',
    title: 'JLPT',
    description:
      'The Japanese-Language Proficiency Test or JLPT, is a standardized criterion-referenced test to evaluate and certify Japanese language proficiency for non-native speakers, covering language knowledge, reading ability, and listening ability. The test is held twice a year in Japan and selected countries (on the first Sunday of July and December), and once a year in other regions (either on the first Sunday of December or July depending on region). The JLPT is conducted by the Japan Foundation for tests overseas (with cooperation of local host institutions), and Japan Educational Exchanges and Services for tests in Japan.',
  },
  {
    id: 'nat',
    title: 'NAT',
    description:
      'The Japanese Language NAT-TEST is an examination that measures the Japanese language ability of students who are not native Japanese speakers. The tests are separated by difficulty (five levels) and general ability is measured in three categories: Grammar/Vocabulary, Listening and Reading Comprehension. The format of the exam and the types of questions are equivalent to those that appear on the Japanese-Language Proficiency Test (JLPT).',
  },
  {
    id: 'ift-ssw',
    title: 'IFT-SSW',
    description:
      'In order to obtain SSW (Specified Skilled Worker) status of residence, it is necessary to pass the “Japan Foundation Test for Basic Japanese (JFT-Basic)” or acquire the N4 certificate for the “Japanese Language Proficiency Test (JLPT).',
  },
  {
    id: 'eps-topik-ubt',
    title: 'EPS TOPIK UBT',
    description:
      'In ubiquitous-based testing (UBT), testing, scoring, and grade management are performed using tablets and smartphones Computer-Based Testing (CBT): Computer-based testing (CBT) involves reading questions, responding to them on individual computers and submitting them.',
  },
];

const footerLinks = [
  {
    name: 'Service',
    link: '/services',
  },
  {
    name: 'Our Courses',
    link: '/courses',
  },
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'Message from MD',
    link: '/about/message',
  },
  {
    name: 'Test Preparation',
    link: '/class/jlpt',
  },
  {
    name: 'FAQs',
    link: '/about/faq',
  },
  {
    name: 'Contact Us',
    link: '/contact-us',
  },
  {
    name: ' ',
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
  courses,
  classes,
  footerLinks,
};
