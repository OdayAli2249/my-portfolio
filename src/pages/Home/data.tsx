
import { tags } from "../../utils/constants";
import { AboutMeData, ServicesProps, SkillsProps, WorkExperience } from "./interfaces";

export const basicInfo: AboutMeData = {
    title: 'ABOUT ME',
    firstName: 'Oday',
    lastName: 'Ali',
    birthYear: 1997,
    picture: 'https://odayali2249.github.io/portfolio-resources/my-picture.jpg',
    education: [
        'Bachelor in IT Engineering and specialization in Artificial intelligence engineering (Damascus University).',
        'Master in Computer Science (in progress).'
    ],
    expertise: [
        'Experience with Flutter: about 1 years',
        'Experience with React.js: about 2 year',
        'Some experience with machine learning containing successful computer vision, NLP, data mining projects.',
        'Entry-Level Back-End Developer with Nest.js Proficiency.'
    ],
    languages: ['English', 'Arabic'],
    profession: 'Hybrid Mobile Application Developer, Web Front-End Developer, Software-Development-Experience since: 2021 - with 3 years containing development of web apps with React.js and cross-platform mobile apps with Flutter'
};


export const services: ServicesProps = {
    title: 'EXPERIENCE',
    headerText: "Get to know my services and qualifications",
    subtitle: "In my mind, I believe that there is nothing I can't do and a person with good searching skills can accomplish any type of assignment or come up with new better one.",
    srcImage: "https://odayali2249.github.io/portfolio-resources/resources/profile_1.png",
    popperLevelTop: [
        {
            icon: 'https://odayali2249.github.io/portfolio-resources/icons/front-end-icon.svg',
            label: "Frontend Development",
            content: "Develop responsive and interactive web applications tailored to client specifications, ensuring high performance and usability across devices."
        },
        {
            icon: 'https://odayali2249.github.io/portfolio-resources/icons/mobile-development-icon.svg',
            label: "Mobile App Development",
            content: "Design and develop cross-platform mobile applications using frameworks like Flutter, integrating machine learning models for enhanced functionality."
        }
    ],
    popperLevelCenter: [
        {
            icon: 'https://odayali2249.github.io/portfolio-resources/icons/software-engineering-icon.svg',
            label: "Communication & Problem Solving",
            content: "My service offerings extend beyond technical proficiency, encompassing essential soft skills vital for project success. With clear communication, adaptability, and problem-solving abilities, I ensure smooth project execution and build lasting client rapport. By blending technical expertise with interpersonal finesse, I deliver tailored solutions that exceed expectations and drive project success."
        }
    ],
    popperLevelBottom: [
        {
            icon: 'https://odayali2249.github.io/portfolio-resources/icons/machine-learning-icon.svg',
            label: "Machine Learning Integration",
            content: "Integrate machine learning algorithms into web and mobile applications to enable features such as predictive analytics, recommendation systems, and computer vission.",
            positionContent: "top"
        },
        {
            icon: 'https://odayali2249.github.io/portfolio-resources/icons/back-end-icon.svg',
            label: "Backend Development",
            content: "Build robust backend systems using technologies like Node.js, Express.js, or Nest.js to handle data storage, user authentication, and API integration, ensuring seamless communication between frontend and backend components.",
            positionContent: "top"
        }
    ]
}

export const skills: SkillsProps = {
    title: "SKILLS/TECHNOLOGIES",
    subtitle: "Proficient in advanced frontend technologies such as Flutter and web frameworks, complemented by intermediate backend expertise, hand-on experience with machine learning containg interesting projects, alongside in-depth knowledge of CI/CD - DevOps - software engineering concepts.",
    carousel: {
        title: "Here is a list of elements that contain components that facilitate access, that is, the part that the component expresses in the Projects section",
        items: [
            {
                title: "Front End Development",
                subtitle: "Hand-on experience developing mobile/web applications with advanced java script frameworks and flutter and successfully deliver and maintain software products to real life level.",
                icon: "https://odayali2249.github.io/portfolio-resources/icons/front-end-icon.svg",
                items: [1, 2, 3]
            },
            {
                title: "Back End Development",
                subtitle: "Experience of handling back end related task like database design, ORM integration, structure advanced MVC system with middleware, controllers, validators, handlers..",
                icon: "https://odayali2249.github.io/portfolio-resources/icons/back-end-icon.svg",
                items: [4, 5, 6]
            },
            {
                title: "Machine Learning",
                subtitle: "This include creating AI-powered solution in development level as student, containing: computer vision projects, data mining algorithms, recommendation system methods and expert/rule-bases systems.",
                icon: "https://odayali2249.github.io/portfolio-resources/icons/machine-learning-icon-plus.svg",
                items: [3, 7, 4]
            },
            {
                title: "CI/CD - Software engineering",
                subtitle: "A mindset of software engineer dealing with product that should be easy to scale, maintain and read, besides, awareness of Developers / Operations continuous life cycle optimization.",
                icon: "https://odayali2249.github.io/portfolio-resources/icons/deployment-icon.svg",
                items: [7, 6, 5, 1]
            }
        ]
    }
}

export const worksExperience: WorkExperience = {
    title: 'WORK EXPERIENCE',
    items: [
        {
            responsibilities: [
                'Designed an advanced software architecture highly conducive to scalability, maintainability, and continuous feature addition through modularization.',
                'Leveraged code reusability, modular separation, and cutting-edge technology to enhance performance and facilitate seamless integration of new functionalities.',
                'Implemented innovative caching strategies and optimized API design to minimize server calls, thereby accelerating user interaction and response times.'
            ],
            companyName: 'Disrupt-x.IOT',
            position: 'Mobile Engineer',
            date: 'MAR 2021 - APR 2022'
        },
        {
            responsibilities: [
                'Played a pivotal role in requirement analysis, assessing their feasibility, and proposing design ideas, UI/UX mockups for features. Implemented these designs seamlessly into the codebase, ensuring alignment with project objectives and user needs.',
                'Successfully navigated complex challenges to refactor extensive software systems, transitioning from outdated state management and versioning technologies to cutting-edge alternatives.',
                'Achieved a substantial reduction in codebase size, up to 30%, aiming to enhance performance and minimize loading times on browsers.'
            ],
            companyName: 'Ark-e Tech',
            position: 'Front-end Engineer',
            date: 'MAY 2022 - FEB 2023'
        },
        {
            responsibilities: [
                "A large-scale software platform was created from scratch after a five-month hiatus due to the search for a skilled developer. The initial release was successfully delivered and satisfied the client within two months of me taking over the project, restoring the CEO's confidence in the continuation of the contract with the client.",
                'Led a small team and managed task organization, improving branching and automating workflow sequencing between designers and backend/frontend developers. Reduced wait times and increased speed through the implementation of various specialized CI/CD technologies.',
                'Award: Leading the statistics of contributors in the repository, my name stands at the forefront as the top contributor among eight individuals in the project, with 164 commits over three months.'
            ],
            companyName: 'Unifi Solutions',
            position: 'Front-end Engineer',
            date: 'FEB 2023 - APR 2024'
        }
    ]
}