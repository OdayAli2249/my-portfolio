import { arrayToMap } from "../../utils/functions";
import { Project } from "./interfaces";

export const projects: Project[] = [{
    id: 1,
    type: 'video',
    mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4',
    name: 'Poly Dynamics',
    logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/sc/logo.jpg',
    tags: [2, 7, 8, 9, 10],
    description: 'Scientific computation - Physics engine - 2D games math',
    gallery: [
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg', type: 'image', highlightWord: 'Image(1): Rigid Body Simulator', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg', type: 'image', highlightWord: 'Image(2): Rigid Body Simulator', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4', type: 'video', highlightWord: 'Demo(1): Rigid Body Simulator', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard.png', type: 'image', highlightWord: 'Image(3): Rigid Body Simulator - Dashboard', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4', type: 'video', highlightWord: 'Demo(2): Rigid Body Simulator - Add wind Effect in X axis', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg', type: 'image', highlightWord: 'Image(4): Rigid Body Simulator', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg', type: 'image', highlightWord: 'Image(5): Rigid Body Simulator', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg', type: 'image', highlightWord: 'Image(6): Rigid Body Simulator', tag: 2 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/6.jpg', type: 'image', highlightWord: 'Image(7): Rigid Body Simulator', tag: 2 },
    ],
    linksTitle: 'Links:',
    links: [
        {
            text: 'Source Code:',
            url: 'https://github.com/OdayAli2249/poly-dynamics-2D',
            clickableText: 'Poly Dynamics',
        },
        {
            text: 'References:',
            url: 'https://www.amazon.co.uk/Game-Physics-Engine-Development-Commercial-Grade/dp/' +
                '0123819768/ref=asc_df_0123819768/?tag=googshopuk-21&linkCode=df0&hvadid=311013355418&hvpos' +
                '=&hvnetw=g&hvrand=7481786533575717995&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&' +
                'hvlocphy=20339&hvtargid=pla-489055530895&psc=1&mcid=52deca3b3da739f69d09f33d10f8f0b0&th=1&psc=1',
            clickableText: 'Game Physics Engine Development: How to Build a Robust Commercial-Grade Physics' +
                ' Engine for your Game',
        },
        {
            text: '',
            url: 'https://www.amazon.co.uk/Game-Physics-Cookbook-Gabor-Szauer/dp/1787123669',
            clickableText: 'Game Physics Cookbook Paperback 24 Mar. 2017',
        },
        {
            text: '',
            url: 'https://www.amazon.co.uk/Physics-Game-Programmers-Grant-Palmer/dp/159059472X',
            clickableText: 'Physics for Game Programmers Paperback Illustrated, 20 April 2005',
        }],
    aboutTitle: 'About the Project:',
    aboutItems: [
        {
            title: 'Rigid Body Simulator in Java and OpenGL',
            boldSentence: 'Rigid Body Simulator in Java and OpenGL',
            description: 'Developed a robust rigid body simulator using Java and OpenGL, providing a platform for simulating complex physical interactions.' +
                'Leveraged the power of OpenGL for efficient rendering and visualization of 2D polygons and their dynamic behavior.',
            tag: 2
        },
        {
            title: 'Dynamic 2D Polygon Simulation',
            boldSentence: 'Dynamic 2D Polygon Simulation',
            description: 'Implemented a dynamic simulation environment featuring 2D polygons falling from a height onto a cracked ground, enhancing challenge and realism.' +
                'Designed the simulation to showcase realistic collisions and interactions between rigid bodies, accurately modeling physics principles.',
            tag: 10
        },
        {
            title: 'Integration of ODE Solver and Euler Method',
            boldSentence: 'Integration of ODE Solver and Euler Method',
            description: 'Utilized an Ordinary Differential Equation (ODE) solver combined with the Euler method to simulate realistic physical behavior.' +
                'Implemented advanced numerical methods to accurately model the dynamics of rigid bodies and their interactions within the simulation environment.',
            tag: 7
        },
        {
            title: 'In-depth Research and Reference Utilization',
            boldSentence: 'In-depth Research and Reference Utilization',
            description: "Conducted extensive research, drawing insights from physics textbooks and scientific computation research to inform the simulator's design and implementation." +
                "Incorporated findings from advanced physics concepts and computational methodologies to ensure fidelity and accuracy in the simulation's representation of physical phenomena.",
            tag: 8
        },
        {
            title: 'Visualization of Collision and Interaction Dynamics',
            boldSentence: 'Visualization of Collision and Interaction Dynamics',
            description: 'Developed sophisticated visualization techniques with OpenGL to depict collision and interaction dynamics between rigid bodies.' +
                'Enabled users to observe and analyze the complex behavior of polygons as they collide, deform, and interact with each other and the environment.',
            tag: 9
        },
        {
            title: 'Interactive Dashboard for Customizing Body Parameters',
            boldSentence: 'Interactive Dashboard for Customizing Body Parameters',
            description: 'Implemented an intuitive dashboard interface allowing users to customize parameters for each individual body within the simulation.' +
                'Provided controls to set initial angular and linear position, angle, and velocity for precise configuration of body dynamics.' +
                'Integrated functionality to incorporate wind effects as vectors, enabling users to simulate environmental influences on body motion.' +
                'Included options to adjust mass and dimensions for each body, allowing for fine-tuning of physical properties and behaviors.' +
                'Empowered users to initiate simulation execution with the click of a button, facilitating seamless interaction and exploration of dynamic scenarios.',
            tag: 2
        },
    ],
    options: [
        { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Code', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
        { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Demo', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
        { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Details', actionType: 'DEFAULT' },
    ]
},
{
    id: 2,
    type: 'video',
    mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4',
    name: 'Ultimate Mine Sweeper',
    logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/ms/logo.jpg',
    tags: [1, 2, 3, 4, 5, 6],
    description: 'Multithreads Programming - Data Structures and Algorithms - Problem Solving - 2D games math',
    gallery: [
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg', type: 'image', highlightWord: 'Image(1): Ultimate Mines Weeper Game', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg', type: 'image', highlightWord: 'Image(2): Ultimate Mines Weeper Game', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4', type: 'video', highlightWord: 'Demo(1): Ultimate Mines Weeper Game', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/menu.jpg', type: 'image', highlightWord: 'Image(3): Ultimate Mines Weeper - Dashboard', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4', type: 'video', highlightWord: 'Demo(2): Ultimate Mines Weeper Game', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg', type: 'image', highlightWord: 'Image(4): Ultimate Mines Weeper Game', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg', type: 'image', highlightWord: 'Image(5): Ultimate Mines Weeper Game', tag: 1 },
        { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg', type: 'image', highlightWord: 'Image(6): Ultimate Mines Weeper Game', tag: 1 },
    ],
    linksTitle: 'Links:',
    links: [
        {
            text: 'Source Code:',
            url: 'https://github.com/OdayAli2249/poly-dynamics-2D',
            clickableText: 'Ultimate Mines Weeper',
        }],
    aboutTitle: 'About the Project:',
    aboutItems: [
        {
            title: 'Mine Sweeper Game with Advanced Roles',
            boldSentence: 'Mine Sweeper Game with Advanced Roles',
            description: 'Developed a Mine Sweeper game with additional roles, offering enhanced gameplay experiences beyond the traditional rules.',
            tag: 2
        },
        {
            title: 'Desktop Application in Java',
            boldSentence: 'Desktop Application in Java',
            description: "Built a desktop application using Java, leveraging its robustness and cross-platform compatibility. Utilized Java's rich ecosystem and libraries to develop a feature-rich Mine Sweeper game.",
            tag: 2
        },
        {
            title: 'Flexible User Interface (UI) for Parameter Customization',
            boldSentence: 'Flexible User Interface (UI) for Parameter Customization',
            description: 'Empowered players to adjust settings such as the number of shields for each player, board dimensions, and timeout settings to tailor the game to their preferences.',
            tag: 2
        },
        {
            title: 'Object-Oriented Programming (OOP) and Advanced Software Architecture',
            boldSentence: 'Object-Oriented Programming (OOP) and Advanced Software Architecture',
            description: "Employed Object-Oriented Programming principles to design a modular and scalable codebase.",
            tag: 4
        },
        {
            title: 'Multithreading Programming for UI and Computation Separation',
            boldSentence: 'Multithreading Programming for UI and Computation Separation',
            description: 'Carefully managed interactions between threads to ensure smooth gameplay and user experience.',
            tag: 1
        },
        {
            title: 'File Storage for Game Persistence and Statistics',
            boldSentence: 'File Storage for Game Persistence and Statistics',
            description: 'Leveraged Java I/O stream SDK for efficient reading and writing of game data, enabling players to resume saved games and track their progress over time.',
            tag: 1
        },
    ],
    options: [
        { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Code', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
        { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Demo', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
        { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Details', actionType: 'DEFAULT' },
    ]
}]

export const projectsMap: Map<number, Project> = arrayToMap(projects);