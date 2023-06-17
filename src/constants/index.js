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
    star,
    ag,
    free,
    diamond,
    carrent,
    jobit,
    tripguide,
    threejs,
    wordpress,
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
        title: "React-js Developer",
        icon: mobile,
    },
    {
        title: "WordPress Developer",
        icon: backend,
    },
    {
        title: "Project Manager",
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
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "WordPress",
        icon: wordpress,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
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
        name: "docker",
        icon: docker,
    },

];

const experiences = [
    {
        title: "Web Developer and Project Manager",
        company_name: "Apparel Group L.L.C",
        icon: ag,
        iconBg: "#fff",
        date: "Oct 2021 - Present",
        points: [
            "Developing and managing the corporate website Apparel Group.",
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Help and support the corporate’s brands on their online projects.",
            "Handling existed websites and update them on demand.",
            "Developing new websites for the corporate and the brands.",
            "Creating landing pages and HTML emailers.",
            "Coordinate with marketing team to enhance SEO and track websites traffic.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-End Developer",
        company_name: "Freelancer",
        icon: free,
        iconBg: "#E6DEDD",
        date: "Feb 2021 - Oct 2021",
        points: [
            "Information-gathering from the client.",
            "Planning and Creating the Website Sitemap.",
            "Design the website.",
            "Translate Design to code (develop) and give effective feedback.",
            "Launch and maintain the site (hosting and deploying).",

        ],
    },
    {
        title: "IT Engineer and Web Developer",
        company_name: "Diamond Island Office Equipment L.L.C",
        icon: diamond,
        iconBg: "#383E56",
        date: "Jan 2020 – Feb 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Developing a new system to enhance the workflow between employees and customers.",
            "Working on E-commerce website with payment gateway using React, Redux, nodejs.",
            "Testing Accounting system and report bugs.",
            "Hardware and software maintenance.",
            "Troubleshooting and problem solving.",
        ],
    },
    {
        title: "IT Engineer",
        company_name: "Star Computer",
        icon: star,
        iconBg: "#E6DEDD",
        date: "Sep 2012 – Nov 2019",
        points: [
            "Developing Desktop applications on demands.",
            "Software and hardware maintenance for laptops, computers, tablets, tablet PC’s and iPad",
            "Install and maintain networks, terminals, and internet access points.",
            "Recover lost or deleted data.",
            "Security cameras (CCTV and IP cameras) with online access.",
            "Testing new devices and solve any problems if existed.",
            "Customer service.",

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
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
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
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };