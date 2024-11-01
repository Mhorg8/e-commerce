import { IconType } from "react-icons";

export interface navLink {
  id: number;
  name: string;
  path: string;
}

export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  cartItems?: string | string[] | null;
  emailVerified?: boolean | null;
  updatedAt: Date;
  createdAt: Date;
  verify?: boolean | null;
  isAdmin?: boolean | null;
  img?: string | null;
  phone?: string | null;
}

export interface Product {
  id: string;
  productName: string;
  price: number;
  stock: number;
  desc: string;
  category: string[];
  quantity: number | null;
  rate: number;
  image?: string | null;
  color?: string[] | null;
  selectedColor?: string | null;
  cartItems?: string[] | null;
  reviews?: string[] | null;
  createdAt: Date | string; // Adjust if necessary
  updatedAt: Date | string; // Adjust if necessary
}

export interface FooterLinks {
  heading: string;
  links: { name: string; path: string }[];
}

export interface teamUser {
  name: string;
  position: string;
  img: string;
  education: string;
  projects: string[];
}

export interface ProjectsOverview {
  id: number;
  name: string;
  img: string;
}

export interface SocialMedia {
  id: number;
  name: string;
  path: string;
  Icon: IconType;
}
