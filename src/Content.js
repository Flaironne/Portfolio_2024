// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import java2 from "./assets/images/Skills/java2.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";
import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "FLORIAN",
    LastName: "WU",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Node js",
        // para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "React js",
        // para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Python",
        // para: "Lorem ipsum text  dummy",
        logo: python,
      },
      {
        name: "Java",
        // para: "Lorem ipsum text  dummy",
        logo: java2,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Développement Web",
        para: "Je crée des sites web modernes et performants, adaptés à vos besoins, avec un souci de l'UX et du SEO pour une meilleure visibilité.",
        logo: services_logo1,
      },
      {
        title: "Développement d'Applications",
        para: "Je développe des applications mobiles et desktop performantes, compatibles avec plusieurs plateformes et faciles à utiliser.",
        logo: services_logo2,
      },
      {
        title: "Développement de Jeux Vidéo",
        para: "Je conçois des jeux vidéo immersifs et captivants, de l'idée initiale à la réalisation, avec un gameplay attractif.",
        logo: services_logo3,
      },    
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Job Board",
        image: project1,
      },
      {
        title: "Java 2D game",
        image: project2,
      },
      // {
      //   title: "Creative Website",
      //   image: project3,
      // },
    ],
  },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Helping businesses to grow and increase revenue",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "wuflorian2000@gmail.com",
        icon: GrMail,
        link: "mailto:wuflorian2000@gmail.com",
      },
      {
        text: "+33 1234567890",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
  },
  Footer: {
    text: "Don't worry about failure; you only have to be right once.",
  },
};
