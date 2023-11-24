import {
    seo,
    branding,
    photo,
    dev,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    project7,
    project8,
    yeab,
    customer,
    david,
    blog2,
    blog1
} from "../assets";

export const navLinks = [
    {
        id: "services",
        title: "Services"
    },
    {
        id: "portfolio",
        title: "Portfolio"
    },
    {
        id: "testimonials",
        title: "Testimonials"
    },

    {
        id: "blog",
        title: "Blog"
    },
    {
        id: "contact",
        title: "Connect"
    }
];

export const serviceCard = [
    {
        icon: dev,
        title: "Web Design & Development",
        color: "bg-blue-100",
        body: "I don't just design websites. I build high-performing, beautiful websites that are conversion-focused, brand-accurate, and user-friendly."
    },
    {
        icon: seo,
        title: "SEO",
        color: "bg-yellow-100",
        body: "A greater audience. A high converting website won't be effective if no one visits it. Ranking on Google is essential to getting new clients in the door."
    },
    {
        icon: branding,
        title: "Graphic & Branding",
        color: "bg-red-100",
        body: "Catch the eye. In addition to web services, I can produce branding and marketing resources for both print and digital applications."
    },
    {
        icon: photo,
        title: "Photo & Video",
        color: "bg-purple-100",
        body: "Show, don't tell. Photos and videos are effective at telling the story of who you are and what you do, establishing trust, and building relationships with potential customers."
    }
];

export const projects = [
    {
        src: project1,
        index: 1,
        shortText: "React-weather-app",
        link: "https://chaos-19.github.io/React-weather-app/"
    },
    {
        src: project2,
        shortText: "React-ToDo-App",
        link: "https://chaos-19.github.io/React-ToDo-App/",
        index: 1
    },
    {
        src: project3,
        shortText: "Portfolio website",
        link: "https://chaos-19.github.io/Web_projects/Portfolio/",
        index: 1
    },
    {
        src: project4,
        shortText: "Trainig studio landing page",
        link: "https://chaos-19.github.io/Web_projects/Trainig%20studio%20landing%20page/",
        index: 2
    },
    {
        src: project5,
        shortText: "Bookstore-web-project",
        link: "https://github.com/Chaos-19/Bookstore-web-project-main/",
        index: 2
    },
    {
        src: project6,
        shortText: "Admin Page",
        link: "/https://github.com/Chaos-19/Bookstore-web-project-main/",
        index: 2
    },
    {
        src: project8,
        shortText: "Gradient websit with parallax effect",
        link: "/https://chaos-19.github.io/Web_projects/Gradient websit with parallax effect",
        index: 3
    },
    {
        src: project7,
        link: "/www.Google.com",
        index: 3
    }
];

export const methods = [
    {
        title: "Discovery",
        body: "This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience."
    },
    {
        title: "Design",
        body: "I take what I’ve learned about you & craft a bespoke website that’s tailored to meet your unique needs, all while accurately representing your brand & keeping things aesthetically pleasing & useable for your audience."
    },
    {
        title: "Build",
        body: "Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability."
    },
    {
        title: "Launch",
        body: "I take what I’ve learned about you & craft a bespoke website that’s tailored to meet your unique needs, all while accurately representing your brand & keeping things aesthetically pleasing & useable for your audience."
    }
];

export const reviews = [
    {
        src: yeab,
        name: "Yeabsira",
        review: "I hired Michael to build my website for my small landscaping business. Our business is growing by double digits in large part to the superb website.",
        site: "www.example.com"
    },
    {
        src: david,
        name: "Yared",
        review: "Creative, professional, and reliable. A keen eye for design, both in form and function. Very highly recommended!",
        site: "www.example.com"
    },
    {
        src: customer,
        name: "Tera",
        review: "Michael was an absolute pleasure to work with. He listened to my website requirements, and designed a perfect site for us!",
        site: "www.example.com"
    }
];
export const blogs = [
    {
        src: blog2,
        title: "3 Tips for Picking The Right Web Designer",
        date: "January 23rd, 2023"
    },
    {
        src: blog1,
        title: "How To Lazy-load Google Analytics",
        date: "November 30th, 2022"
    }
];
