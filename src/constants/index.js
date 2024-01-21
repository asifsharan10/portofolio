import { PlaneHelper } from "three";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    snaptap,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    },
    {
      title: "Machine-Learning",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "NodeJs",
      icon: nodejs,
    },
   
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
  ];
  
  const experiences = [
    {
      title: "Car Sell and Rental Servive",
      company_name: "GearUp",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using PHP,HTML,MySql,CSS and Javascript.",
        "To showcase random cars and their price for rental and sell purpose ",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Social App",
      company_name: "SnapTap",
      icon: starbucks,
      iconBg: "#383E56",
      date: "January 2024",
      points: [
        "Developing and maintaining web applications using React.Js, React Query, TypeScript, Tailwind and Javascript.",
        "To let anyone post anything ",
       
      ],
    }
  ];
  
  const testimonials = [
    
  ];
  
  const projects = [
    {
      name: "SnapTap",
      description:
        "A social app that everyone wants where they can  share whatever they want.",
      tags: [
        {
          name: "React.Js",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
        
      ],
      image: snaptap,
      source_code_link: "https://snap-tap-social-app.vercel.app/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        
      ],
      image: carrent,
      source_code_link: "https://github.com/asifsharan10/GearUp",
    },
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };