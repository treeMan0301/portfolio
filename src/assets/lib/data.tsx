import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import awsamplifyicon from "../../assets/icons/awsamplifyicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import vuejsicon from "../../assets/icons/vueicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import chatgpticon from "../../assets/icons/chatgpticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import woocommerceicon from "../../assets/icons/woocommerceicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
import solidity from "../../assets/icons/solidity.svg";
import rust from "../../assets/icons/rust.svg";
import FineDine from "../../assets/img/FineDine.webp";
import NYCImg from "../../assets/img/NYC.webp";
import CodeMetrics from "../../assets/img/CodeMetrics.webp";
import Career from "../../assets/img/Career.webp";
import profilepicture from "../img/me2.webp";
import OpenrepImg from "../img/Openrep.webp";
import Wordpresssite from "../img/Wordpresssite.webp";
import Wordpresstheme from "../img/Wordpress.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiMail } from "react-icons/fi";
export const headerIntroData = {
  title: {
    de: "Hi, ich bin Alpay",
    en: "Hi, I'm Michael",
  },
  subtitle: "Senior Fullstack && Blockchain Developer ",
  description: {
    de: "Ich bin Alpay, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "Michael, a fullstack && blockchain developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Daraz woocommerce Theme development",
    description:
      "Entwicklung von Online-E-Commerce-Themen.",
    description_EN:
      "Online ecommerce theme development.",
    technologies: [
      { name: "WordPress", icon: wordpressicon },
      { name: "Woocommerce", icon: woocommerceicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "php", icon: phpicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Figma", icon: figmaicon },
    ],
    image: Wordpresstheme,
    deploymenturl: "https://demo.hellowebhelp.com/daraz/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "Wordpress Custom Theme Development",
    description:
      "Entwicklung benutzerdefinierter Wordpress-Themes aus HTML-Vorlagen.",
    description_EN:
      "Wordpress custom theme developments from Html template.",
    technologies: [
      { name: "WordPress", icon: wordpressicon },
      { name: "Woocommerce", icon: woocommerceicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "php", icon: phpicon },
      { name: "MongoDB", icon: mongodbicon },
      { name: "Figma", icon: figmaicon },
    ],
    
    image: Wordpresssite,
    deploymenturl: "https://demo.hellowebhelp.com/daraz/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  {
    title: "FineDine",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "FineDine is a Menu App that helps you to increase your revenue by digitizing the dining. I work here as a Sr. Frontend engineer to create frontend architecture, CI/CD automation also digital mobile menu, website, dashboard by using a UI kit that I develop for the Finedine.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Next", icon: nextjsicon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: FineDine,
    deploymenturl: "https://finedinemenu.com",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "Code Metrics: AI-Powered Analytics for Software Development",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "It is an application that allows you to connect to GitHub repositories for statistics, problem visualization, analysis and code quality.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Next", icon: nextjsicon },
      { name: "React", icon: reacticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: CodeMetrics,
    deploymenturl: "https://codemetrics.ai",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },
  {
    title: "NYC Real Estate",
    description:
      "Ziel dieses Projekts war es, eine schnelle Webanwendung für den Immobilienbereich zu erstellen, die bei den Google-Suchergebnissen für das Schlüsselwort ‚Wohnungen in New York ohne Gebühr‘ an erster Stelle steht, ohne dass für Werbung bezahlt werden muss.",
    description_EN:
      "This project aimed to create a fast Real Estate web application that would rank first in the Google search results for the keyword 'no fee NY apartments,' without having to pay for advertising.",
    technologies: [
      { name: "JavaScript", icon: javascripticon },
      { name: "Next.js", icon: nextjsicon },
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "Express", icon: expressicon },
      { name: "Node", icon: nodejsicon },
      { name: "Docker", icon: dockericon },
      { name: "AWS", icon: awsicon },
    ],
    image: NYCImg,
    deploymenturl: "https://rentbetta.com/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "white",
    },
  },
  {
    title: "OpenAI ChatGPT Langchain application",
    description:
      "Entwickeln Sie eine KI-gestützte Web-App zur schnellen Erstellung von Social-Media-Posts und Blog-Inhalten. Die App nutzt bereitgestellte Daten wie Schlüsselwörter, Zielgruppe und Beschreibungen, um ansprechende Posts mit Bildern zu erstellen. Kompatibel mit wichtigen Plattformen wie Instagram, Twitter, Reddit, Facebook und Pinterest. Zu den Funktionen gehören die Post-Planung und das Analytics-Tracking für eine fundierte Content-Strategie.",
    description_EN:
      "Develop an AI-powered web app for rapidly generating social media posts and blog content. The app utilizes provided data such as keywords, target audience, and descriptions to create engaging posts with images. Compatible with major platforms like Instagram, Twitter, Reddit, Facebook, and Pinterest. Features include post scheduling and analytics tracking for informed content strategy.",
    technologies: [
      { name: "ChatGPT", icon: chatgpticon },
      { name: "Next.js", icon: nextjsicon },
      { name: "Tailwind CSS", icon: tailwindcssicon },
      { name: "Node", icon: nodejsicon },
      { name: "Docker", icon: dockericon },
      { name: "AWS Amplify", icon: awsamplifyicon },
    ],
    image: OpenrepImg,
    deploymenturl: "https://www.openrep.ai/",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Career-Job Search and Career Coaching Platform",
    description:
      "Eine Yoga und Meditations App, die wir als Team mit React, MongoDB, Express und Node.js gebaut haben. Meine Aufgabe als Gitmaster und Backend Entwickler bestand darin, das Backend mit Anbindung anhand einer Restful API zu programmieren und die Datenbank in MongoDB zu modellieren.",
    description_EN:
      "Career.io is a platform empowering users in job searches, resume building, and career growth. I developed the Job Tracker and personalized recommendation features, streamlining application tracking and improving user experience through tailored job matches. These enhancements helped users manage and optimize their career journey effectively.",
    technologies: [
      { name: "Html", icon: htmlicon },
      { name: "CSS", icon: cssicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "Next", icon: nextjsicon },
      { name: "React", icon: reacticon },
      { name: "Typescript", icon: typescripticon },
      { name: "Node.js", icon: nodejsicon },
    ],
    image: Career,
    deploymenturl: "https://career.io",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#FFD5BD",
    },
  },

] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Vue.js",
        hash: "#Vue.js",
        icon: vuejsicon,
        color: "#4FC08D",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon],
        color: ["#000000"],
      },
      {
        title: "Rust",
        hash: "#Rust",
        icon: [rust],
        color: ["#000000"],
      },
      {
        title: "Solidity",
        hash: "#Solidity",
        icon: [solidity],
        color: ["#000000"],
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const sideBarRightMail = {
  link: "mailto:michealbejan@gmail.com",
  text: "myemail@com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://github.com/snowMan128",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:michealbejan@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Michael",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like to be on the fast lane - in the truest sense of the word. Cars are my passion, and I enjoy being on unknown roads with powerful machines.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new places and cultures is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Alpay meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Alpay may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
