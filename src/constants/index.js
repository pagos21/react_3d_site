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
    vue,
    angular,
    laravel,
    mysql,
    flutter,
    python,
    git,
    figma,
    casa,
    boolean,
    hell,
    proj,
    cedole,
    // cedole_old,
    eprenotazione,
    eprenotazione_old,
    epagamenti,
    epagamenti_old,
    carwash,
    gettone,
    ticket,
    site,
    booleanIcon,
    
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Penetration Tester",
      icon: creator,
    },
  ];

  const technologies4Mobile = [
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Vue3",
      icon: vue,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  
  const technologies = [
    {
      name: "Flutter",
      icon: flutter,
    },
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
      name: "Vue3",
      icon: vue,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: mysql,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      id: 1,
      title: "Boolean Careers",
      company_name: "Boolean Careers",
      icon: boolean,
      iconBg: "#383E56",
      date: "Apr 2020 - Sep 2020",
      points: [
        "Full-Time 700-hour course at Boolean Careers.",
        "What I learned: SQL/PHP/Laravel\n/AJAX/JSON\n/JavaScript/Bootstrap4\n",
        "As a final exam, I made a working copy of AirBnb.",
      ],
    },
    {
      id: 2,
      title: "Front-end Web Developre",
      company_name: "Il Giardino dei Libro",
      icon: hell,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Nov 2021",
      points: [
        "Front-End Web Developer for corporate eCommerce site.",
        "What I learned: Flutter/Twig\n/Javascript/Jquery.",
        "Development of ticketing platform for task priority management for corporate staff.",
        "Technologies: [{Frontend: VueJs}, {Backend: Firebase}].",
        "Director Live and Webinar editor",
        "Tools: Wirecast / Premiere Pro"
      ],
    },
    {
      id: 3,
      title: "Full-Stack Web Developer & Mobile Developer",
      company_name: "Project S.r.l.",
      icon: proj,
      iconBg: "#383E56",
      date: "Nov 2021 - Today",
      points: [
        "Full-stack development of the book coupon portal intended for booksellers and bookstores.",
        "What I used: [{Frontend: Angular 15, Bootstrap5}, {Backend: Java8}, {db: MySQL}, {script: Python3}}.",
        "Fully independent development of No. 2 Android App for school meals reservation and school bill payment.",
        "What I used: [{Frontend: Flutter3.x with Provider and Riverpod}]",
        "Development and maintenance of the eCivis management system intended for municipal employees of 400 Italian municipalities.",
        "Technologies: [{Frontend: extJs3.x}, {Backend: Java8}]",
      ],
    },
    {
      id: 4,
      title: "Personal Projects",
      company_name: "",
      icon: casa,
      iconBg: "#E6DEDD",
      date: "Spare time",
      points: [
        "Development and assembly of a 90's style Arcade Cabinet with programming of an Android App in Flutter to simulate tokens insertion.",
        "Video game development in Unity for Android and Desktop",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      id:1,
      name: "ISS Ticket Platform",
      description:
        "A web-app intended for internal staff of companies to create, manage and solve company tickets inherent to tech issues",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ticket,
      image_alt: ticket,
      source_code_link: "https://github.com/",
    },
    {
      id:2,
      name: "Cedole librarie",
      description:
        "Web-based portal intended for stationery store staff. The webApp allows to more than 300 operators to book and bill for booklet packages for pupils in more than 100 Italian municipalities",
      tags: [
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: cedole,
      image_alt: cedole,
      source_code_link: "https://github.com/",
    },
    {
      id: 3,
      name: "ePrenotazione",
      description:
        "An android app intended for elementary school janitors. The app makes it quick and easy to manage attendance for school cafeteria meal reservations.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: eprenotazione,
      image_alt: eprenotazione_old,
      source_code_link: "https://github.com/",
    },
    {
      id: 4,
      name: "ePagamenti",
      description:
        "Intuitive android app for managing school bills. The app allows management of bulletin transactions, the extrapolation of customized summaries and printing them via thermal printers.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Java",
          color: "pink-text-gradient",
        },
      ],
      image: epagamenti,
      image_alt: epagamenti_old,
      source_code_link: "https://github.com/",
    },
    {
      id: 5,
      name: "4rc4d3",
      description:
        "Personal project for 90s Arcade Cabinet. Through android app it is possible to enter virtual tokens. The app integrates a mini-game in Unity3D to earn virtual coins.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
      ],
      image: gettone,
      image_alt: gettone,
      source_code_link: "https://github.com/",
    },
    {
      id: 6,
      name: "CarWash",
      description:
        "Personal project (W.I.P) for the digitization of old car wash facilities (with or without staff)",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Vue",
          color: "blue-text-gradient",
        },
      ],
      image: carwash,
      image_alt: carwash,
      source_code_link: "https://github.com/",
    },
    {
      id: 7,
      name: "BoolBNB",
      description:
        "Final project exam for 'Boolean Career'. It's a working clone of the original website AirBNB.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Algolia",
          color: "orange-text-gradient",
        },
      ],
      image: booleanIcon,
      image_alt: booleanIcon,
      source_code_link: "https://github.com/",
    },
    {
      id: 8,
      name: "This portfolio",
      description:
        "The portfolio website you are visiting right now was my first React project.It was made basically with the intent of learnig the 'React' framework",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Analytics",
          color: "orange-text-gradient",
        },
        {
          name: "Three.js",
          color: "orange-text-gradient",
        },
      ],
      image: site,
      image_alt: site,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, technologies4Mobile, experiences, testimonials, projects };