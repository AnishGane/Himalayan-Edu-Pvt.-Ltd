import { FaFacebook } from 'react-icons/fa';
import { SiYoutube } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

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

export { navLinks, socials };
