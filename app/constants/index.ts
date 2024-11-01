import {
  FooterLinks,
  navLink,
  ProjectsOverview,
  SocialMedia,
  teamUser,
} from "../types";
import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
import { IoLogoPinterest } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";

export const footerLinks: FooterLinks[] = [
  {
    heading: "Product",
    links: [
      { name: "Jackets", path: "/shop/jackets" },
      { name: "shirts", path: "/shop/shirts" },
      { name: "dresses", path: "/shop/dresses" },
      { name: "outwears", path: "/shop/outwears" },
      { name: "hats", path: "/shop/hats" },
    ],
  },
  {
    heading: "Buying",
    links: [
      { name: "shop", path: "/shop" },
      { name: "term of use", path: "/shop/termOfUse" },
      { name: "Privacy", path: "/shop/Privacy" },
      { name: "How it works", path: "/shop/HowItWorks" },
      { name: "customer services", path: "/shop/customerServices" },
    ],
  },
  {
    heading: "Social",
    links: [
      { name: "Instagram", path: "https://www.instagram.com" },
      { name: "facebook", path: "https://www.facebook.com" },
      { name: "Twitter", path: "https://www.twitter.com" },
    ],
  },
];
export const navLinks: navLink[] = [
  { id: 1, name: "home", path: "/" },
  { id: 2, name: "Products", path: "/products" },
  { id: 3, name: "About", path: "/about" },
  { id: 4, name: "Contact", path: "/contact" },
];

export const teamUsers: teamUser[] = [
  {
    name: "Alex",
    position: "Manager",
    img: "/team-1.jpg",
    education: "MBA",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
  {
    name: "David",
    position: "Manager",
    img: "/team-2.jpg",
    education: "MBA",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
  {
    name: "Mohammad",
    position: "Developer",
    img: "/team-3.jpg",
    education: "Computer Since",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
  {
    name: "Mahdi",
    position: "Developer",
    img: "/team-4.jpg",
    education: "Software engineering",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
  {
    name: "Mahsoon",
    position: "IT",
    img: "/team-5.jpg",
    education: "Computer since",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
  {
    name: "Reza",
    position: "Designer",
    img: "/team-1.jpg",
    education: "MBA",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
  {
    name: "Narges",
    position: "Designer",
    img: "/team-7.jpg",
    education: "Product development",
    projects: ["e-commerce", "portfolio", "To-do"],
  },
];

export const projectsOverview: ProjectsOverview[] = [
  { id: 1, name: "E-commerce", img: "/project-ecom.png" },
  { id: 2, name: "Dashboard", img: "/project-admin.png" },
  { id: 3, name: "E-commerce", img: "/project-ecom.png" },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    name: "instagram",
    Icon: LuInstagram,
    path: "https://instagram.com",
  },
  { id: 2, name: "facebook", Icon: LuFacebook, path: "https://facebook.com" },
  {
    id: 3,
    name: "Pinterest",
    Icon: IoLogoPinterest,
    path: "https://pinterest.com",
  },
  { id: 4, name: "Twitter", Icon: LuTwitter, path: "https://twitter.com" },

  { id: 5, name: "youtube", Icon: LuYoutube, path: "https://youtube.com" },
  {
    id: 6,
    name: "telegram",
    Icon: PiTelegramLogo,
    path: "https://telegram.com",
  },
];
