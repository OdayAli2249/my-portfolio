import { tags } from "../../utils/constants";
import {
  AboutMeData,
  ServicesProps,
  SkillsProps,
  WorkExperience,
} from "./interfaces";

export const basicInfo: AboutMeData = {
  title: "ABOUT ME",
  firstName: "Oday",
  lastName: "Ali",
  birthYear: 1997,
  picture: "https://odayali2249.github.io/portfolio-resources/my-picture.jpg",
  education: [
    "Bachelor in IT Engineering and specialization in Artificial intelligence engineering (Damascus University).",
    // "Master in Computer Science (in progress).",
  ],
  expertise: [
    "- Proficient in front-end development with React.js.",
    "- Familiar with CI/CD automation and setup using tools provided by GitLab and AWS services like S3, EC2, and IAM.",
    "- Hands-on experience with back-end tasks using Nest.js and mobile tasks using Flutter.",
    "- Experienced in machine learning, including successful projects in computer vision, NLP, and data mining.",
    // "- Familiar with the prototyping tool Figma and aware of UX considerations.",
    "- Diving deeply into complex software systems to make them reliable, scalable, and maintainable is my job.",
  ],
  languages: ["English", "German (in progress)"],
  profession:
    "A software engineer with 4 years of experience, specializing in front-end development.",
};

export const services: ServicesProps = {
  title: "SERVICES",
  headerText: "Get to know my services and qualifications",
  subtitle: "",
  srcImage:
    "https://odayali2249.github.io/portfolio-resources/resources/profile_1.png",
  popperLevelTop: [
    {
      icon: "https://odayali2249.github.io/portfolio-resources/icons/front-end-icon.svg",
      label: "Frontend Development",
      content:
        "Develop complex and interactive web applications tailored to client specifications, ensuring high performance and usability across browsers.",
    },
    // {
    //   icon: "https://odayali2249.github.io/portfolio-resources/icons/mobile-development-icon.svg",
    //   label: "Mobile App Development",
    //   content:
    //     "Design and develop cross-platform mobile applications using frameworks like Flutter, integrating machine learning models for enhanced functionality.",
    // },
    {
      icon: "https://odayali2249.github.io/portfolio-resources/icons/deployment-icon.svg",
      label: "Software Product Deployment and Delivery",
      content:
        "Automate the development-operations cycle including application bundling, automated testing, deployment to cloud infrastructure, monitoring.",
    },
  ],
  popperLevelCenter: [
    {
      icon: "https://odayali2249.github.io/portfolio-resources/icons/software-engineering-icon.svg",
      label: "Communication & Problem Solving",
      content:
        "My service offerings extend beyond technical proficiency, encompassing essential soft skills vital for project success. With clear communication, adaptability, and problem-solving abilities, I ensure smooth project execution and build lasting client rapport. By blending technical expertise with interpersonal finesse, I deliver tailored solutions that exceed expectations and drive project success.",
    },
  ],
  popperLevelBottom: [
    {
      icon: "https://odayali2249.github.io/portfolio-resources/icons/machine-learning-icon.svg",
      label: "Machine Learning Integration",
      content:
        "Integrate machine learning algorithms into web and mobile applications to enable features such as predictive analytics, recommendation systems, and computer vision.",
      positionContent: "top",
    },
    {
      icon: "https://odayali2249.github.io/portfolio-resources/icons/front-end-icon.svg",
      label: "UI Design",
      content:
        "Driven by focusing on the best UX, Create responsive UI and wireframes that simplify accessing features.",
      positionContent: "top",
    },
  ],
};

export const skills: SkillsProps = {
  title: "SKILLS/TECHNOLOGIES",
  subtitle:
    "Proficient in advanced frontend technologies like React.js, alongside in-depth knowledge of CI/CD - DevOps - software engineering concepts.",
  carousel: {
    title:
      "Here is a list of elements that contain components that facilitate access, that is, the part that the component expresses in the Projects section",
    items: [
      {
        title: "Front End Development",
        subtitle:
          "Hand-on experience developing web applications with advanced java script frameworks (React.js) and successfully deliver and maintain software products to real life level.",
        icon: "https://odayali2249.github.io/portfolio-resources/icons/front-end-icon.svg",
        items: [2, 3, 4, 6, 7, 12, 13, 14, 15, 26],
      },
      {
        title: "CI/CD - Software engineering",
        subtitle:
          "A mindset of software engineer dealing with product that should be easy to scale, maintain and read, besides, awareness of Developers / Operations continuous life cycle optimization.",
        icon: "https://odayali2249.github.io/portfolio-resources/icons/deployment-icon.svg",
        items: [7, 25, 39],
      },
      {
        title: "Mobile Development",
        subtitle:
          "Designed and developed cross-platform mobile applications using Flutter, and distributed them on Google Play.",
        icon: "https://odayali2249.github.io/portfolio-resources/icons/mobile-development-icon.svg",
        items: [16, 17, 18, 19, 20, 21, 9],
      },
      {
        title: "Other",
        subtitle: `Experienced in backend tasks like database design, ORM integration, and MVC structuring.
         Created AI projects including computer vision projects, data mining algorithms, scientific computation.`,
        icon: "https://odayali2249.github.io/portfolio-resources/icons/machine-learning-icon-plus.svg",
        items: [8, 10, 11, 27, 28, 34, 30, 31, 35],
      },
    ],
  },
};

export const worksExperience: WorkExperience = {
  title: "WORK HISTORY",
  items: [
    {
      responsibilities: [
        `Tackled a challenging short-term volunteer project to develop an algorithm for generating a chicken mixture. Delved deeply into an unfamiliar 
  field to understand unclear requirements, even beyond the client's expertise. Utilized a combination of advanced concepts such as linear algebra, first-order logic, loss functions, 
  and optimization loops. Implemented rigorous unit and integration testing. Delivered an impressive algorithm that successfully passed client acceptance testing, 
  demonstrating the solution's effectiveness.`,
      ],
      companyName: "Damascus University",
      position: "Software Engineer",
      date: "FEB 2024 - MAY 2024",
    },
    {
      responsibilities: [
        `Led the team and managed task organization, merge requests and code continues integration, used gitlab CI/CD tools for improving automating workflow including building,
 automated testing, deployment to different environments, reduced wait times and increased delivery speed.`,
        `Measured performance using React Developer Tools, Web Vitals and Lighthouse. Analyzed weaknesses and implemented improvements with React.lazy, react query
 and optimized asset caching. Achieved a 40% reduction in load times.`,
        `Collaborated closely with customers to deeply understand their requirements. Effectively communicated the technical implementation to my
 team and CEO, ensuring the best possible delivery of the solution.`,
        `Revived a stalled large-scale software platform, delivering the initial release within two months. This satisfied the client and restored 
the CEO's confidence in continuing the contract.`,
      ],
      companyName: "Unifi Solutions",
      position: "Front-end Engineer",
      date: "FEB 2023 - Present",
    },
    {
      responsibilities: [
        `Successfully navigated complex challenges to refactor extensive software systems, transitioning from outdated state management
and versioning technologies to cutting-edge alternatives.`,
        `Achieved a substantial reduction in codebase size, up to 60%, aiming to enhance performance and minimize loading times on
browsers.`,
        `Developed and implemented a communication protocol that increased team productivity by 25% and reduced project turnaround times by 20%. This improved team morale, built 
trust among members, and resulted in more efficient project completions.`,
        `Developed a method to optimize UX by analyzing software monitoring data and real-life customer UI usage using Google Analytics. This significantly improved user 
satisfaction and increased customer retention by 30% by addressing bottlenecks and drop-off points.`,
      ],
      companyName: "Ark-e Tech",
      position: "Front-end Developer",
      date: "MAY 2022 - FEB 2023",
    },
    {
      responsibilities: [
        `Assisted in maintaining and improving software applications by fixing bugs and integrating new features. Enhanced system stability 
and contributed to smoother user experiences.`,
        `implemented innovative caching strategies and optimized API design to minimize server calls, thereby accelerating user interaction
and response times.`,
        `Leading the statistics of contributors in the repository, my name stands at the forefront as the top contributor among
eight individuals in my team, with 164 commits over three months.`,
        // "Implemented innovative caching strategies and optimized API design to minimize server calls, thereby accelerating user interaction and response times.",
      ],
      companyName: "Disrupt-x.IOT",
      position: "Mobile Developer",
      date: "NOV 2020 - APR 2022",
    },
  ],
};
