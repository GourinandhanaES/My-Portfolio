import image1 from "../assets/images/learnt.png";
import image3 from "../assets/images/vrv.png";
import image4 from "../assets/images/fitpeo.png";
import image5 from "../assets/images/ecart.png";
import image6 from "../assets/images/carelabs.png";
import image7 from "../assets/images/docApp.png";
import image8 from "../assets/images/movieApp.png";
import image9 from "../assets/images/tolirwa.png"; 
import image10 from "../assets/images/project-man.png";
import image11 from "../assets/images/event.png"; 
import image12 from "../assets/images/health-app.png"; 
import video1 from "../assets/images/ikea.webm";
import video2 from "../assets/images/design.webm";
import video3 from "../assets/images/weather.webm";


export const projects = [
  {
    id: "015",
    title: "Health App",
    tagline: "A full-stack hospital management system for tracking patient records and treatment workflows.",
    description:
      "A modern full-stack healthcare web application that allows hospitals or clinics to securely manage patient records, track treatment stages, and update medical information. Built using Next.js, MongoDB, and Tailwind CSS, the project focuses on real-world hospital workflows, usability, and performance.",
    year: "2026",
    timeline: "1 day",
    industry: "Healthcare / Hospital Management",
    services: ["Next.js", "MongoDB", "Mongoose", "Tailwind CSS", "API Routes", "Full-Stack Development"],
    about:
      "This project was built as part of my journey to strengthen my full-stack development skills using Next.js and MongoDB. I wanted to create a real-world hospital management system where staff can efficiently view, update, and track patient information. The application includes dynamic patient profiles, treatment timelines, medication management, and emergency contact handling. Through this project, I improved my understanding of API routes, database integration, and clean UI design with Tailwind CSS.",
    challenges:
      "One major challenge was designing a flexible patient data model that could support nested fields such as medications, emergency contacts, and discharge plans. Another challenge was implementing seamless data updates while maintaining UI responsiveness and preventing inconsistent database states.",
    solutions:
      "I structured the MongoDB schema with nested objects and arrays to support real-world medical data. I implemented API routes for secure CRUD operations and used client-side data sanitization before updates to prevent invalid fields from being sent. Tailwind CSS and reusable UI components helped maintain a clean, responsive interface across devices.",
    image: image12, 
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/health-app",
    previewLink: "https://health-app-mu-six.vercel.app/", 
    linkedinLink: "",
  },
  {
    id: "014",
    title: "Event Scheduler Web Application",
    tagline: "A full-stack event management system with admin control and user-friendly scheduling.",
    description:
      "A responsive full-stack event scheduler that allows users to view upcoming events and administrators to securely create, update, and delete events. Built with React, Node.js, Express, and MongoDB, the project focuses on usability, performance, and real-world admin workflows.",
    year: "2026",
    timeline: "1 day",
    industry: "Event Management / Productivity",
    services: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Authentication"],
    about:
      "This project was built as part of my journey to strengthen my full-stack development skills using the MERN stack. I wanted to create a real-world application where users can easily view events while administrators can manage them efficiently. The app includes authentication, date-based filtering, calendar integration, and toast notifications for better user experience. Through this project, I improved my understanding of API integration, protected routes, and clean UI design using Tailwind CSS.",
    challenges:
      "One of the major challenges was implementing secure admin authentication and route protection. Another challenge was synchronizing the calendar view with backend data, ensuring upcoming events were correctly sorted and displayed. Designing a responsive admin dashboard without making the interface look cluttered was also a key concern.",
    solutions:
      "I implemented JWT-based authentication and protected routes to secure the admin panel. I used date-based filtering and sorting logic to dynamically fetch and display upcoming events. To improve usability and layout, I refactored the admin event form into a modal and enhanced feedback using React Toastify. Tailwind CSS helped maintain a clean and responsive UI across devices.",
    image: image11,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Event-scheduler",
    previewLink: "https://event-scheduler-frontend-reactapp.vercel.app/",
    linkedinLink: "",
  },
  {
    id: "013",
    title: "Project Management System",
    tagline: "A modern dashboard to plan, track, and manage projects efficiently.",
    description:
      "A responsive Project Management System built using React and Tailwind CSS that allows users to create projects, track tasks, manage assignees, and set reminders — all from a clean and intuitive dashboard.",
    year: "2026",
    timeline: "1 day",
    industry: "Productivity / Project Management",
    services: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Local Storage"],
    about:
      "This project was developed as part of a frontend interview assignment to demonstrate strong UI/UX design, component architecture, and state handling in React. I designed a single-dashboard workflow where users can create and edit projects using a reusable modal, view detailed project information, manage tasks, and set reminders. The app focuses on usability, clarity, and real-world dashboard experience.",
    challenges:
      "Designing a clean and scalable UI while keeping the file structure simple was a key challenge. Managing nested data like projects, tasks, assignees, and reminders within a single state source and keeping the completion percentage in sync dynamically also required careful logic planning.",
    solutions:
      "I implemented a reusable project modal for both creation and editing, used structured state management, and applied helper functions to calculate task progress automatically. Tailwind CSS was used to maintain consistent spacing, responsiveness, and modern design while keeping the codebase lightweight and easy to maintain.",
    image: image10,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/project-manager",
    previewLink: "https://project-management-reactweb.vercel.app/",
    linkedinLink: "",
  },
  {
    id: "012",
    title: "Carelabs",
    tagline: "Redesign and redevelopment of a multi-country corporate website with scalable CMS architecture.",
    description:
      "Carelabs is a professional training and lab-based learning platform. This project involved redesigning and rebuilding their existing website using Next.js and Tailwind CSS, with Strapi as the headless CMS. The platform was rebuilt to support large-scale content management and country-specific pages, while maintaining a consistent brand identity across regions.",
    year: "2025",
    timeline: "2 Months",
    services: "Frontend Development • CMS Architecture • Website Redesign",
    industry: "Education & Professional Training",
    services: [ "Next.js", "React", "Tailwind CSS","Framer Motion", "Strapi", "GraphQL","Apollo Client"],
    about:
      "For Carelabs, I worked on the complete redesign and redevelopment of their existing corporate website, rebuilding it from the ground up using Next.js, React, and Tailwind CSS. I was responsible for developing the entire frontend and integrating it with a Strapi headless CMS using GraphQL and Apollo Client. A major part of the project involved designing a scalable content architecture to support country-specific pages, where each country had its own content, navigation, and page structure while still maintaining a unified codebase and brand identity. To achieve this, I implemented dynamic routing and data-driven page rendering in Next.js, allowing content to be fully managed from Strapi without hardcoding pages. I also focused on performance optimization, responsive design, and clean component architecture to ensure maintainability and future scalability. The final outcome was a modern, fast, and flexible website that significantly improved content management, scalability, and overall user experience compared to the previous version.",
    challenges:
      "A major challenge was handling country-specific content within a single website. Each country had its own set of pages, navigation structure, and content requirements, all managed from the same CMS. Structuring Strapi to support this level of flexibility without duplicating content or complicating frontend logic was a key technical challenge.",
    solutions:
      "We redesigned the CMS architecture in Strapi using structured content types, relations, and dynamic zones to manage country-specific data efficiently. On the frontend, Next.js dynamic routing combined with GraphQL queries enabled seamless rendering of localized pages. Apollo Client handled optimized data fetching and caching, resulting in a scalable and maintainable solution.",
    image: image6,
    logo: "https://carelabs-khaki.vercel.app/_next/image?url=https%3A%2F%2Fstriking-pleasure-03fbdffa08.media.strapiapp.com%2Fcarelab_logo_7d51f198e5.png&w=640&q=75",
    type: "image",
    gitLink: "https://github.com/your-username/learnt-academy", 
    previewLink: "https://carelabs-khaki.vercel.app/", 
    linkedinLink: "",  
  },
  {
    id: "011",
    title: "Design Declares UK",
    tagline: "A pixel-perfect, animated frontend clone built with React, SCSS, and Framer Motion.",
    description:
      "A high-fidelity frontend clone of the Design Declares UK website, focusing on pixel-perfect layouts, smooth animations, and responsive behavior. The project was developed as part of a company task, replicating the original design with close attention to spacing, typography, interactions, and scroll-based animations.",
    year: "2024",
    timeline: "Company Task",
    services: "Frontend Development • UI Engineering",
    industry: "Design & Sustainability",
    services: [ "React", "SCSS", "Framer Motion","React Router","Vercel"],
    about:
    "This project is a high-fidelity frontend clone of the Design Declares UK website, built using React, SCSS, and Framer Motion. I focused on achieving pixel-perfect layouts by closely matching the original design’s spacing, typography, and visual hierarchy across all sections. The site is content-heavy and includes multiple pages and country-specific variations, which I handled using reusable, props-driven components and React Router for navigation. Smooth scroll and reveal animations were implemented using Framer Motion to closely replicate the original interactions. The project was completed as part of a company task under time constraints, with a strong emphasis on UI accuracy, responsiveness, and clean component architecture. Pixel-perfect UI implementation and attention to detail were the core focus of this project.",
    challenges:
      "The primary challenge was achieving pixel-perfect accuracy across a content-heavy website with complex layouts and animations. The site included multiple sections, reusable components, and country-based pages, all of which needed to match the original design precisely across different screen sizes.",
    solutions:
      "I structured the UI using modular SCSS with a BEM-inspired approach and built reusable React components for sections like headers, footers, menus, country pages, and interactive elements. Framer Motion was used to implement smooth scroll-based and reveal animations, while React Router enabled multi-page navigation. Props-driven components allowed flexible styling and content variations for different country pages.",
    image: video2,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "video",
    gitLink: "https://github.com/GourinandhanaES/fitpeo-web",
    previewLink: "https://fitpeo-web.vercel.app/",
    linkedinLink: "", 
  },
  {
    id: "010",
    title: "Learnt Accademy",
    tagline: "A full-featured e-learning platform built with React and the MERN stack.",
    description:
    "Learnt Accademy is an interactive online learning platform that enables users to browse courses, track learning progress, complete quizzes, and purchase premium content. Built using the MERN stack, the platform includes secure authentication, role-based access, admin controls, and integrated payments.",
    year: "2024",
    timeline: "1 Month",
    services: "Frontend Development • Full Stack Integration",
    industry: "Education & E-Learning",
    services: ["React", "React Router", "Axios","Node.js","Express","MongoDB","JWT Authentication","OTP Verification",
    "Razorpay","React Bootstrap","CSS"],
    about:
      "Learnt Accademy is a full-stack e-learning platform designed to deliver an engaging and structured learning experience. Users can register and log in securely using OTP-based authentication, browse available courses, track progress, and complete quizzes with real-time feedback. The platform also supports paid courses through Razorpay integration in test mode, allowing users to purchase and access content instantly. An admin dashboard provides complete control over courses, videos, users, and progress monitoring. The application was built with a strong focus on scalability, clean UI, and smooth user experience across all devices.",
    challenges:
      "The main challenges included implementing secure authentication with OTP verification, handling role-based access for users and admins, managing dynamic course progress tracking, and integrating a payment gateway while ensuring a smooth and responsive user experience.",
    solutions:
      "I implemented JWT-based authentication combined with OTP verification for secure access control. React Router was used to manage protected routes and role-based navigation. Course progress and quiz data were handled through structured MongoDB schemas, while Razorpay was integrated in test mode for secure course purchases. The UI was built using React Bootstrap and custom CSS to ensure responsiveness and usability across devices.",
    image: image1,
    logo: "https://learnt-accademy-frontend.vercel.app/assets/logoImg-BiGmV2N8.png",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Learnt-Accademy-Frontend.git", 
    previewLink: "https://learnt-accademy-frontend.vercel.app", 
    linkedinLink: "",  
  },
  {
    id: "009",
    title: "Document App",
    tagline: "A modern document management system with real-time syncing and rich text editing.",
    description:
      "A React-based document management application that allows users to add, view, edit, search, and delete documents efficiently. Built with Firebase for real-time data handling and React Quill for rich text editing, the app delivers a clean, responsive, and intuitive user experience.",
    year: "2024",
    timeline: "2 weeks",
    services: "Frontend Development • UI Engineering",
    industry: "Productivity & Document Management",
    services: [ "React","React Router","Firebase Firestore","Firebase Authentication","Material UI","React Quill","CSS","Vercel"],
    about:
      "The Document Management App is a modern and efficient solution for managing digital documents. Users can create documents with titles, descriptions, and image URLs, and edit content using a rich text editor powered by React Quill. Firebase Firestore enables real-time data syncing, ensuring changes are reflected instantly across the app. The interface is built with Material UI to provide a sleek, consistent, and fully responsive experience. The project focuses on usability, clean UI design, and scalable frontend architecture.",
    challenges:
      "Key challenges included integrating a rich text editor with dynamic content updates, managing real-time document state with Firebase Firestore, and maintaining a smooth and responsive UI across different devices.",
    solutions:
      "React Quill was integrated for rich text editing, enabling users to format document content easily. Firebase Firestore was used for real-time CRUD operations and state synchronization. React Router handled seamless navigation between document listing and detail pages, while Material UI components ensured a consistent, accessible, and responsive interface.",
    image: image7,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/Document-App", 
    previewLink: "https://document-app-six.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_react-materialui-firebase-activity-7274159169572597761-UIxG"
  },
  {
    id: "008",
    title: "Movie Watchlist App",
    tagline: "A simple and interactive movie watchlist built with React and the OMDb API.",
    description:
      "A React-based movie watchlist application that allows users to search for movies using the OMDb API, add them to a personal watchlist, and mark movies as watched. The project focuses on API integration, state management, and responsive UI design.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend Development",
    industry: "Entertainment & Media",
    services: ["React","OMDb API","JavaScript", "CSS", "Vercel"],
    about:
      "The Movie Watchlist App is a lightweight React application designed to demonstrate API integration and client-side state management. Users can search for movies in real time using the OMDb API, add selected movies to a personal watchlist, and mark them as watched for easy tracking. The application features a clean and intuitive interface with responsive layouts to ensure a smooth experience across devices.",
    challenges:
      "The main challenges involved handling asynchronous API calls, managing watchlist state efficiently, and preventing duplicate entries while maintaining a smooth user experience.",
    solutions:
      "The OMDb API was integrated using asynchronous requests to fetch movie data dynamically. React state management was used to track the watchlist and watched status, ensuring real-time UI updates. Conditional rendering was applied to manage different movie states, while responsive styling ensured usability across various screen sizes.",
    image: image8,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/movie-watchlist", 
    previewLink: "https://movie-watchlist-neon.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_react-webdevelopment-frontenddevelopment-activity-7266488597116010496-ezbW",  
  },
  {
    id: "007",
    title: "RBAC Project",
    tagline: "A role-based employee management system with controlled access and CRUD operations.",
    description:
      "A React-based employee management application implementing role-based access control (RBAC). The platform allows admins, editors, and viewers to interact with employee data based on defined permissions, ensuring secure and structured user management.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend Development • Access Control Implementation",
    industry: "HR & Enterprise Management",
    services: ["React","Bootstrap","Role-Based Access Control","REST API","JSON Server","Local Storage","Vercel",
      "Render"],
    about:
      "The RBAC Employee Management System is a web application designed to demonstrate role-based access control in a real-world scenario. The app supports three user roles—admin, editor, and viewer—each with specific permissions. Admins can add, edit, and delete employee records, editors can add and update records, and viewers have read-only access. The frontend is built with React and Bootstrap to ensure a responsive and user-friendly interface, while a JSON Server hosted on Render serves as the backend API. Local storage is used to manage authentication state and enforce role-based restrictions across the application.",
    challenges:
      "The key challenge was implementing clear and enforceable role-based permissions while maintaining clean UI logic and preventing unauthorized actions across different user roles.",
    solutions:
      "Role-based permissions were handled through conditional rendering and centralized access checks based on role data stored in local storage. Protected UI actions ensured that users could only access features allowed by their role. CRUD operations were integrated via REST APIs, and responsive layouts were implemented using Bootstrap for consistent usability across devices.",
    image: image3,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/employee-management", 
    previewLink: "https://employee-management-dun.vercel.app/", 
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_admins-editors-viewers-activity-7266016004697186305-1qhL", 
  },
  {
    id: "006",
    title: "IKEA UI Clone website",
    tagline: "A static, pixel-focused UI clone of the IKEA website using HTML and CSS.",
    description:
      "A static UI clone of the IKEA website built using only HTML and CSS. The project focuses on layout accuracy, visual hierarchy, and responsive structure, showcasing strong fundamentals in frontend design and styling.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend UI Development",
    industry: "E-Commerce & Retail",
    services: [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Netlify"
    ],
    about:
      "The IKEA UI Clone is a static frontend project developed to replicate the visual structure and layout of the IKEA website using pure HTML and CSS. The focus was on recreating the overall look and feel, including page sections, spacing, typography, and product-style layouts. This project demonstrates a strong understanding of core web fundamentals and responsive design principles without relying on JavaScript or frameworks.",
    challenges:
      "The main challenge was replicating a large e-commerce layout using only HTML and CSS while maintaining proper alignment, spacing, and responsiveness across different screen sizes.",
    solutions:
      "The layout was structured using semantic HTML and modern CSS techniques such as Flexbox and Grid. Careful attention was given to spacing, typography, and alignment to closely match the original design, ensuring a clean and responsive UI across devices.",
    image: video1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png",
    type: "video",
    gitLink: "https://github.com/GourinandhanaES/ikea",
    previewLink: "https://clone-ikeaweb.netlify.app/",
    linkedinLink: "https://www.linkedin.com/posts/gourinandhana-e-s-353991251_ikea-html-css-activity-7242628021210284032-FJ_e"
  },
  {
    id: "005",
    title: "ECart website",
    tagline: "A modern shopping web app with wishlist, cart, and checkout built using React and Vite.",
    description:
      "E-Cart is a responsive shopping website built with React and Vite that allows users to browse products, view detailed information, manage wishlists and carts, and review a checkout summary with total pricing.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend Development • State Management",
    industry: "E-Commerce & Retail",
    services: ["React", "Redux", "Tailwind CSS", "JavaScript", "Vercel"],
    about:
    "E-Cart is a modern shopping web application built with React and Vite, designed to demonstrate global state management using Redux Toolkit. The application uses Redux to manage shared data such as product listings, cart items, and wishlist items across multiple pages, including Home, Product View, Cart, Wishlist, and the Header component. Redux slices were created separately for cart, products, and wishlist to ensure clean and scalable state management. Actions such as adding items to the cart, updating quantities, managing wishlists, and calculating totals are handled centrally, allowing consistent behavior throughout the app without prop drilling. This approach ensures a smooth shopping experience with real-time UI updates, predictable state changes, and a responsive, user-friendly interface across all devices.",
    challenges:
      "The primary challenges included managing global state for cart and wishlist functionality, ensuring accurate price calculations during checkout, and maintaining a responsive layout across different screen sizes.",
    solutions:
      "Redux was implemented to handle global state management for cart and wishlist features, enabling predictable and scalable state updates. Vite improved development speed and performance, while Tailwind CSS provided utility-based styling to build a clean, responsive UI efficiently.",
    image: image5,
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/1280px-Ikea_logo.svg.png",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/E-Cart",
    previewLink: "https://e-cart-green.vercel.app/",
    linkedinLink: ""
  },
  {
    id: "004",
    title: "Tolirwa Website Migration",
    tagline: "A high-performance Next.js conversion of an existing WordPress business website with headless data fetching.",
    description:
      "A complete migration of the Tolirwa business website from WordPress to a modern, SEO-optimized Next.js frontend. All content is dynamically fetched from the existing WordPress backend using GraphQL, with no hard-coded data, while maintaining design fidelity and improving performance.",
    year: "2025",
    timeline: "Company Project",
    services: "Frontend Development • Headless CMS Integration",
    industry: "Corporate Website / Business Services",
    services: ["Next.js","React","GraphQL","Appolo-client","WordPress (Headless)","SEO Optimization","Responsive Design", "Vercel", "Tailwind CSS"],
    about:
      "Tolirwa is a business website for Tolirwa Ltd (a company based in Kigali, Rwanda), originally built in WordPress. The project’s goal was to convert this WordPress site into a modern Next.js frontend without changing the original design, while achieving better performance, maintainability, and SEO. Instead of hard-coding content, the application uses GraphQL to fetch all data from the existing WordPress backend dynamically. Pages, menus, and content blocks are rendered at build time or on demand using Next.js rendering strategies to ensure fast loading and strong SEO performance. The site preserves the client’s visual identity and content structure while leveraging server-side and static generation features of Next.js for optimal user experience and search ranking.",
    challenges:
      "The primary challenge was replicating the existing WordPress site’s design and content structure while ensuring that all data was sourced dynamically via GraphQL. Maintaining SEO attributes and performance without disrupting the client’s existing search presence was also critical.",
    solutions:
      "A headless WordPress architecture was implemented, using GraphQL APIs to fetch all content. Next.js was used to pre-render pages with static generation where possible and server-side rendering where necessary to optimize SEO and performance. CSS and responsive layouts were rebuilt in the Next.js project to match the original WordPress theme precisely, while ensuring improved performance and maintainability.",
    image: image9,
    logo: "https://dev.tolirwa.com/wp-content/themes/sreyas/logo.png",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/tolirwa",
    previewLink: "https://tolirwa.vercel.app/",
    linkedinLink: "" 
  },
  {
    id: "002",
    tagline: "A real-time weather forecast app built with React and public APIs.",
    description:
      "A dynamic React-based weather application that allows users to search for any city and view real-time weather data, including temperature, humidity, and current weather conditions, fetched from an external API.",
    year: "2024",
    timeline: "Personal Project",
    services: "Frontend Development • API Integration",
    industry: "Weather & Utility Applications",
    services: [ "React", "OpenWeatherMap API", "JavaScript","CSS", "Vercel"],
    about:
      "The Weather App is a responsive and user-friendly React application designed to provide real-time weather information for any location. Users can search by city name to view current temperature, humidity levels, and weather conditions fetched dynamically from the OpenWeatherMap API. The project focuses on API integration, asynchronous data handling, and clean UI presentation. With a modern and minimal design, the app ensures a smooth experience across mobile, tablet, and desktop devices.",
    challenges:
      "The main challenges involved handling asynchronous API requests, managing loading and error states, and ensuring accurate data display while keeping the interface clean and responsive.",
    solutions:
      "The OpenWeatherMap API was integrated using asynchronous fetch requests to retrieve real-time weather data. Conditional rendering was used to manage loading and error states, while responsive styling ensured usability across different screen sizes.",
    image: video3,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "video",
    gitLink: "https://github.com/GourinandhanaES/Weather-App", 
    previewLink: "https://weather-app-one-omega-45.vercel.app/", 
    linkedinLink: "", 
  },
  {
    id: "001",
    title: "Healthcare Dashboard UI",
    tagline: "A modern, pixel-perfect healthcare dashboard UI built with React.",
    description:
      "A frontend-focused healthcare dashboard UI built with React, designed to replicate a pixel-perfect layout from a reference design. The project emphasizes responsive design, reusable components, and clean visual hierarchy using modern CSS techniques.",
    year: "2024",
    timeline: "Personal UI Project",
    services: "Frontend UI Development • Component Design",
    industry: "Healthcare & UI Design",
    services: ["React", "CSS3", "Flexbox", "CSS Grid", "Responsive Design", "Vite", "Vercel"],
    about:
      "The Healthcare Dashboard UI is a frontend design project focused on recreating a modern, real-world healthcare dashboard using React. The application was built by breaking down the layout into reusable and well-structured components such as sidebar navigation, header, calendar view, health status cards, anatomy section, activity feed, and upcoming schedules. Static mock data was used to simulate real dashboard content without a backend. The project highlights strong UI engineering skills, including responsive layouts, component reusability, and precise control over spacing, colors, and visual hierarchy using Flexbox and CSS Grid.",
    challenges:
      "The primary challenge was translating a complex dashboard reference image into a fully responsive React layout while maintaining pixel accuracy, clean component separation, and visual balance across different screen sizes.",
    solutions:
      "The dashboard was decomposed into modular React components, each responsible for a specific section of the UI. Flexbox and CSS Grid were used extensively to manage layout structure and responsiveness. Static data files were organized separately to keep presentation and data concerns cleanly separated, resulting in a maintainable and scalable UI architecture.",
    image: image4,
    logo: "https://media.istockphoto.com/id/2173059563/vector/coming-soon-image-on-white-background-no-photo-available.jpg?s=612x612&w=0&k=20&c=v0a_B58wPFNDPULSiw_BmPyhSNCyrP_d17i2BPPyDTk=",
    type: "image",
    gitLink: "https://github.com/GourinandhanaES/fitpeo-healthcare",
    previewLink: "https://fitpeo-healthcare.vercel.app/",
    linkedinLink: ""
  },
];
