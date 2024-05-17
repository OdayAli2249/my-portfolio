import { arrayToMap } from "../../utils/functions";
import { Project } from "./interfaces";

export const projects: Project[] = [
    //{
    //     id: 1,
    //     type: 'video',
    //     mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/sc/sc-demo-1.mp4',
    //     mediaViewer: {
    //         image: 'https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard.png',
    //         images: [
    //             'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg'
    //         ],
    //         video: 'https://odayali2249.github.io/portfolio-resources/resources/sc/sc-demo-1.mp4',
    //         mediaViewType: 'APV'
    //     },
    //     name: 'Poly Dynamics',
    //     logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/sc/logo.jpg',
    //     tags: [2, 7, 8, 9, 10],
    //     hyperWords: new Map<string, string>([
    //         ['efficient', "https://en.wikipedia.org/wiki/Java_(programming_language)"],
    //         ['polygons', "https://www.mathsisfun.com/geometry/polygons.html"]
    //     ]),
    //     description: 'Scientific computation - Physics engine - 2D games math',
    //     gallery: [
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg', type: 'image', highlightWord: 'Image(1): Rigid Body Simulator', tag: 2 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg', type: 'image', highlightWord: 'Image(2): Rigid Body Simulator', tag: 2 },
    //         {
    //             mediaViewer: {
    //                 image: 'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg',
    //                 images: [
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/2.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg'
    //                 ],
    //                 video: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4',
    //                 mediaViewType: 'APV'
    //             },
    //             src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4', type: 'video', highlightWord: 'Demo(1): Rigid Body Simulator', tag: 2
    //         },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/dashboard.png', type: 'image', highlightWord: 'Image(3): Rigid Body Simulator - Dashboard', tag: 2 },
    //         {
    //             mediaViewer: {
    //                 image: 'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg',
    //                 images: [
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/6.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/1.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg'
    //                 ],
    //                 video: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4',
    //                 mediaViewType: 'APV'
    //             },
    //             src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/Sc-Demo-2-3.mp4', type: 'video', highlightWord: 'Demo(1): Rigid Body Simulator', tag: 2
    //         },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/3.jpg', type: 'image', highlightWord: 'Image(4): Rigid Body Simulator', tag: 2 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/4.jpg', type: 'image', highlightWord: 'Image(5): Rigid Body Simulator', tag: 2 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/5.jpg', type: 'image', highlightWord: 'Image(6): Rigid Body Simulator', tag: 2 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/sc/6.jpg', type: 'image', highlightWord: 'Image(7): Rigid Body Simulator', tag: 2 },
    //     ],
    //     linksTitle: 'Links:',
    //     links: [
    //         {
    //             text: 'Source Code:',
    //             url: 'https://github.com/OdayAli2249/poly-dynamics-2D',
    //             clickableText: 'Poly Dynamics',
    //         },
    //         {
    //             text: 'References:',
    //             url: 'https://www.amazon.co.uk/Game-Physics-Engine-Development-Commercial-Grade/dp/' +
    //                 '0123819768/ref=asc_df_0123819768/?tag=googshopuk-21&linkCode=df0&hvadid=311013355418&hvpos' +
    //                 '=&hvnetw=g&hvrand=7481786533575717995&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&' +
    //                 'hvlocphy=20339&hvtargid=pla-489055530895&psc=1&mcid=52deca3b3da739f69d09f33d10f8f0b0&th=1&psc=1',
    //             clickableText: 'Game Physics Engine Development: How to Build a Robust Commercial-Grade Physics' +
    //                 ' Engine for your Game',
    //         },
    //         {
    //             text: '',
    //             url: 'https://www.amazon.co.uk/Game-Physics-Cookbook-Gabor-Szauer/dp/1787123669',
    //             clickableText: 'Game Physics Cookbook Paperback 24 Mar. 2017',
    //         },
    //         {
    //             text: '',
    //             url: 'https://www.amazon.co.uk/Physics-Game-Programmers-Grant-Palmer/dp/159059472X',
    //             clickableText: 'Physics for Game Programmers Paperback Illustrated, 20 April 2005',
    //         }],
    //     aboutTitle: 'About the Project:',
    //     aboutItems: [
    //         {
    //             title: 'Rigid Body Simulator in Java and OpenGL',
    //             boldSentence: 'Rigid Body Simulator in Java and OpenGL',
    //             description: 'Developed a robust rigid body simulator using Java and OpenGL, providing a platform for simulating complex physical interactions.' +
    //                 'Leveraged the power of OpenGL for efficient rendering and visualization of 2D polygons and their dynamic behavior.',
    //             tag: 2
    //         },
    //         {
    //             title: 'Dynamic 2D Polygon Simulation',
    //             boldSentence: 'Dynamic 2D Polygon Simulation',
    //             description: 'Implemented a dynamic simulation environment featuring 2D polygons falling from a height onto a cracked ground, enhancing challenge and realism.' +
    //                 'Designed the simulation to showcase realistic collisions and interactions between rigid bodies, accurately modeling physics principles.',
    //             tag: 10
    //         },
    //         {
    //             title: 'Integration of ODE Solver and Euler Method',
    //             boldSentence: 'Integration of ODE Solver and Euler Method',
    //             description: 'Utilized an Ordinary Differential Equation (ODE) solver combined with the Euler method to simulate realistic physical behavior.' +
    //                 'Implemented advanced numerical methods to accurately model the dynamics of rigid bodies and their interactions within the simulation environment.',
    //             tag: 7
    //         },
    //         {
    //             title: 'In-depth Research and Reference Utilization',
    //             boldSentence: 'In-depth Research and Reference Utilization',
    //             description: "Conducted extensive research, drawing insights from physics textbooks and scientific computation research to inform the simulator's design and implementation." +
    //                 "Incorporated findings from advanced physics concepts and computational methodologies to ensure fidelity and accuracy in the simulation's representation of physical phenomena.",
    //             tag: 8
    //         },
    //         {
    //             title: 'Visualization of Collision and Interaction Dynamics',
    //             boldSentence: 'Visualization of Collision and Interaction Dynamics',
    //             description: 'Developed sophisticated visualization techniques with OpenGL to depict collision and interaction dynamics between rigid bodies.' +
    //                 'Enabled users to observe and analyze the complex behavior of polygons as they collide, deform, and interact with each other and the environment.',
    //             tag: 9
    //         },
    //         {
    //             title: 'Interactive Dashboard for Customizing Body Parameters',
    //             boldSentence: 'Interactive Dashboard for Customizing Body Parameters',
    //             description: 'Implemented an intuitive dashboard interface allowing users to customize parameters for each individual body within the simulation.' +
    //                 'Provided controls to set initial angular and linear position, angle, and velocity for precise configuration of body dynamics.' +
    //                 'Integrated functionality to incorporate wind effects as vectors, enabling users to simulate environmental influences on body motion.' +
    //                 'Included options to adjust mass and dimensions for each body, allowing for fine-tuning of physical properties and behaviors.' +
    //                 'Empowered users to initiate simulation execution with the click of a button, facilitating seamless interaction and exploration of dynamic scenarios.',
    //             tag: 2
    //         },
    //     ],
    //     options: [
    //         { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Code', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
    //         { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Demo', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
    //         { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Details', actionType: 'DEFAULT' },
    //     ]
    // },
    // {
    //     id: 2,
    //     type: 'video',
    //     mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/ms/ms-demo-3.mp4',
    //     mediaViewer: {
    //         image: 'https://odayali2249.github.io/portfolio-resources/resources/ms/menu.jpg',
    //         images: [
    //             'https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg',
    //             'https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg'
    //         ],
    //         video: 'https://odayali2249.github.io/portfolio-resources/resources/ms/ms-demo-3.mp4',
    //         mediaViewType: 'APV'
    //     },
    //     name: 'Ultimate Mine Sweeper',
    //     logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/ms/logo.jpg',
    //     tags: [1, 2, 3, 4, 5, 6],
    //     description: 'Multithreads Programming - Data Structures and Algorithms - Problem Solving - 2D games math',
    //     gallery: [
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg', type: 'image', highlightWord: 'Image(1): Ultimate Mines Weeper Game', tag: 1 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg', type: 'image', highlightWord: 'Image(2): Ultimate Mines Weeper Game', tag: 1 },
    //         {
    //             mediaViewer: {
    //                 image: 'https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg',
    //                 images: [
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg'
    //                 ],
    //                 video: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4',
    //                 mediaViewType: 'APV'
    //             },
    //             src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4', type: 'video', highlightWord: 'Demo(1): Ultimate Mines Weeper Game', tag: 1
    //         },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/menu.jpg', type: 'image', highlightWord: 'Image(3): Ultimate Mines Weeper - Dashboard', tag: 1 },
    //         {
    //             mediaViewer: {
    //                 image: 'https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg',
    //                 images: [
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/2.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/1.jpg',
    //                     'https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg'
    //                 ],
    //                 video: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4',
    //                 mediaViewType: 'APV'
    //             },
    //             src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/Ms-Demo-2-1.mp4', type: 'video', highlightWord: 'Demo(2): Ultimate Mines Weeper Game', tag: 1
    //         },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/3.jpg', type: 'image', highlightWord: 'Image(4): Ultimate Mines Weeper Game', tag: 1 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/4.jpg', type: 'image', highlightWord: 'Image(5): Ultimate Mines Weeper Game', tag: 1 },
    //         { src: 'https://odayali2249.github.io/portfolio-resources/resources/ms/5.jpg', type: 'image', highlightWord: 'Image(6): Ultimate Mines Weeper Game', tag: 1 },
    //     ],
    //     linksTitle: 'Links:',
    //     links: [
    //         {
    //             text: 'Source Code:',
    //             url: 'https://github.com/OdayAli2249/poly-dynamics-2D',
    //             clickableText: 'Ultimate Mines Weeper',
    //         }],
    //     aboutTitle: 'About the Project:',
    //     aboutItems: [
    //         {
    //             title: 'Mine Sweeper Game with Advanced Roles',
    //             boldSentence: 'Mine Sweeper Game with Advanced Roles',
    //             description: 'Developed a Mine Sweeper game with additional roles, offering enhanced gameplay experiences beyond the traditional rules.',
    //             tag: 2
    //         },
    //         {
    //             title: 'Desktop Application in Java',
    //             boldSentence: 'Desktop Application in Java',
    //             description: "Built a desktop application using Java, leveraging its robustness and cross-platform compatibility. Utilized Java's rich ecosystem and libraries to develop a feature-rich Mine Sweeper game.",
    //             tag: 2
    //         },
    //         {
    //             title: 'Flexible User Interface (UI) for Parameter Customization',
    //             boldSentence: 'Flexible User Interface (UI) for Parameter Customization',
    //             description: 'Empowered players to adjust settings such as the number of shields for each player, board dimensions, and timeout settings to tailor the game to their preferences.',
    //             tag: 2
    //         },
    //         {
    //             title: 'Object-Oriented Programming (OOP) and Advanced Software Architecture',
    //             boldSentence: 'Object-Oriented Programming (OOP) and Advanced Software Architecture',
    //             description: "Employed Object-Oriented Programming principles to design a modular and scalable codebase.",
    //             tag: 4
    //         },
    //         {
    //             title: 'Multithreading Programming for UI and Computation Separation',
    //             boldSentence: 'Multithreading Programming for UI and Computation Separation',
    //             description: 'Carefully managed interactions between threads to ensure smooth gameplay and user experience.',
    //             tag: 1
    //         },
    //         {
    //             title: 'File Storage for Game Persistence and Statistics',
    //             boldSentence: 'File Storage for Game Persistence and Statistics',
    //             description: 'Leveraged Java I/O stream SDK for efficient reading and writing of game data, enabling players to resume saved games and track their progress over time.',
    //             tag: 1
    //         },
    //     ],
    //     options: [
    //         { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Code', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
    //         { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Demo', actionType: 'LINK', link: 'https://github.com/OdayAli2249/poly-dynamics-2D' },
    //         { icon: 'https://odayali2249.github.io/portfolio-resources/resources/profile_1.png', label: 'Details', actionType: 'DEFAULT' },
    //     ]
    // },
    {
        id: 3,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/1.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/1.jpg',
            images: [
                'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/1.jpg',
                'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/2.jpg',
                'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/3.jpg',
                'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/4.jpg'
            ],
            mediaViewType: 'V'
        },
        name: 'Med Check Platform',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mc/Dr Pack V.svg',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: 'Main Contributor among the team with +150 commit.',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/11.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/11.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/12.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/12.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/13.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/13.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/14.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/14.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/15.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/15.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/16.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/16.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/17.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/17.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/18.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/18.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/19.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/19.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/20.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/20.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/21.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/21.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/22.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/22.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/23.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/23.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mc/2x/24.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mc/3x/24.jpg', type: 'image', highlightWord: '', tag: 2
            }
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://check.medxsol.com',
                clickableText: 'Visit the platform',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "- A large-scale software platform was created from scratch after a five-month hiatus due to the search for a qualified developer. The initial release was successfully delivered and satisfied the client within two months of me starting the position and taking over the project, restoring the CEO's confidence in the continuation of the contract with the client.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- As someone who joined a company where a project had been stalled for five months without progress, it was challenging to release the first satisfactory version to the client just two months after starting my position, which made him accept the total seven months, and led to me receiving a financial bonus from the CEO as recognition of my achievement.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Award: Leading the statistics of contributors in the repository, my name stands at the forefront as the top contributor among eight individuals in the project, with 164 commits over three months.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Our team has the lowest costs, fewest members, and handles the most challenging and profitable project compared to other teams in the company's market projects.",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "React.js, type script, MaterialUI, react-query, Vite, FCM, axios.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Led a small team and managed task organization, improving branching and automating workflow sequencing between designers and backend/frontend developers. Reduced wait times by about 40% through the implementation of various specialized CI/CD technologies.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Refactored page navigation and routing mechanism to reduce the depth of the browsing history stack, which helped reduce the average down to 2 actions to reach the target despite the size of code base and the speed required to constantly deliver new features to the client.",
                tag: 1
            },

        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 4,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'Bus Frames',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/logo.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: 'Full stack project with nest.js and react.js.',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/11.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/11.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/12.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/12.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/2x/13.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/business frames/3x/13.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://odayali2249.github.io/business_frames/home',
                clickableText: 'Visit the platform',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: 'Implemented a personal, complex, feature-rich full stack project from scratch, the problem that this solution solves is to perform organized way to manage big content with +10,000,000 items within a company/institution, the content items could be services/products of that company, the platform offers a subsystem representing a recruitment platform so the company owner and his partner can hire/fire/promote employees, and most importantly, assign them permissions by creating permission groups of users, content (service/products) and operations (add/edit/delete).within the context mentioned, I talked about only 30% of the project.',
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Back end: node.js nest.js, dependency injection, sequelize ORM, postgresql,type script.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "Front end: react.js java script, redux, axios, Sass.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "Developed a fully functional, complex, well-structured and responsive full-stack project.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Excuted a modern Method for debugging and project maintenance, which increased the reliability in general, and the development speed of the system by 30%.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Individually, Analyzed and designed readable diagrams using online tools such as Cacoo to ensure that a system is built with a strong foundation.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Meticulously tracked the request transmission rate to minimize cloud connectivity, thereby enhancing speed and optimizing user experience.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Closely monitored rendering counts, ensuring minimal unnecessary UI rendering using core react.js techniques, thereby enhancing performance and elevating user experience which led to 20% less page loading time.",
                tag: 1
            },

        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://odayali2249.github.io/business_frames/home' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 5,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/1.jpg',
            mediaViewType: 'V'
        },
        name: 'Ordert System',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/ic_notification.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/11.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/11.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/12.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/12.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/2x/13.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/ordert/3x/13.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://ordert.com/welcome',
                clickableText: 'Visit the platform',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: 'A web dashboard for restaurant management, payments, and various roles management, catering to end-users, waiters, owners, admins, and kitchen staff.',
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "It also a platform provides an abundance of interfaces to facilitate user interaction and the creation of integrated orders, with the ability to know the order status in real time through notifications.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Designed a complex, user friendly UI components to help user find their needs with a minimum number of actions.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Considered methods for decreasing rendering cost on browser rendering engine by using debouncing, memoization and lazy loading techniques which shortens the necessary waiting time and increases the level of customer access by 36%.",
                tag: 1
            },
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 6,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/4.jpg',
            mediaViewType: 'V'
        },
        name: 'MedX Website',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/Logo.svg',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/2x/11.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/medX/3x/11.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://medxsol.com/',
                clickableText: 'Visit the platform',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: 'Promotional website.',
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: 'Stack',
                description: "react.js, type script, next.js, TailwindCss.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Designed and coded complex components using tailwindCss and animation tools, imporving the receiving, acceptance and accessibilty of the visitors.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Implemented SEO best practices, escalating website traffic by 50%.",
                tag: 1
            },
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 7,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/3.jpg',
            mediaViewType: 'V'
        },
        name: 'Disrupt-X',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/logo.svg',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/disrupt-x/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            }
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://disrupt-x.io/',
                clickableText: 'Visit the platform',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: 'Cloud IoT Solutions Platform/Store/Landing website which allows companies to host, manage, monitor their IoT Devices, the platform contains Roles management system control access privileges.',
                tag: 1
            },
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 8,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/1.jpg',
            mediaViewType: 'V'
        },
        name: 'Facilitrol-X',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/logo.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/web/facility/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            }
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://facilitrol-x.io/',
                clickableText: 'Visit the platform',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "A landing website for facility management software system which is a comprehensive platform designed to streamline and optimize the management of various aspects of a facility or building.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "Collaborated with the development and design teams to create user-friendly UI components that showcase promotional content, enhancing the website's appeal to visitors.",
                tag: 1
            }
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 9,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/cover.png',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'Ordert',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/logo.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/2x/11.png',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/ordert/3x/11.png', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://play.google.com/store/apps/details?id=com.mod.ordert&hl=en_US&gl=TR',
                clickableText: 'Google Play',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "App simplifies order management and table reservations, offering a visual layout for exploring table positions and additional features.",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Flutter, MVVM, GetX, FCM, Code magic.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Spearheaded a significant refactor of the app, optimizing and streamlining the codebase while integrating newer technologies. This initiative led to a remarkable 60% reduction in the app's size on Google Play.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Elevated the app to a new level, transitioning it from a state riddled with bugs to a polished, production-ready version for end users.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Proposed, designed, and implemented UI/UX enhancements to simplify feature usability for users, ensuring a more intuitive experience.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Introduced a modern CI/CD tool called Code Magic, which significantly reduced deployment time by 25%, improving our development process.",
                tag: 1
            },
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 13,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'NetroWatch',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/logo.svg',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: 'Main Contributor among the team with +150 commit.',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/metrowatch/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://play.google.com/store/apps/details?id=com.disruptX.metrowatch&hl=en_US&gl=TR',
                clickableText: 'Google Play',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "A Feature rich platform enables companies to host, manage, and monitor IoT lock devices (e.g., pad lock, parking lock, asset tracker, bike cable), featuring role management for controlling access privileges and more.",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Flutter, BLoC, reactive-ble",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Collaborated with a 7-member team, organized efficient meetings, and met a tight deadline, reducing the development time for the first version to under 2 months.",
                tag: 1
            },
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 10,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'Defcon Patrols',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/logo.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/defcon patrols/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://play.google.com/store/apps/details?id=com.disruptX.defcon&hl=en_US&gl=TR',
                clickableText: 'Google Play',
            }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "A mobile app offers a Cloud IoT Solutions Platform for hosting, managing, and monitoring IoT security devices in companies, covering various sensors in institutions. It alerts on alarms, minimizing damage to people and properties.",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Flutter, BLoC, FCM, socket.io, Clean architecture, dependency  injection.",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Refactor huge codebase, with +150 folder and +300 file, to git ride of deprecated packages and reduce code size, ended up with 30% less bundle size on play store.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Suggested and Achieved an alarm notification system by implementing bidirectional connection through mesaging service, enhancing the app's reliability and alignment with its purpose.",
                tag: 1
            },

        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 11,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'Digital-X',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/logo.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/digitalX/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        // links: [
        //     {
        //         text: '',
        //         url: 'https://check.medxsol.com',
        //         clickableText: 'Visit the platform',
        //     }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            // {
            //     title: '# Description:',
            //     boldSentence: 'Description',
            //     description: "- A large-scale software platform was created from scratch after a five-month hiatus due to the search for a qualified developer. The initial release was successfully delivered and satisfied the client within two months of me starting the position and taking over the project, restoring the CEO's confidence in the continuation of the contract with the client.",
            //     tag: 1
            // },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Flutter, BloC, Clean Architecture",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "Contributed in developement process of the app, including converting figma design to interactive coded UI, managing UI state and data I/O.",
                tag: 1
            }
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 12,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'Muslim App',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/logo.png',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/1.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/muslim app/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        // links: [
        //     {
        //         text: '',
        //         url: 'https://check.medxsol.com',
        //         clickableText: 'Visit the platform',
        //     }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "An app designed for Muslim communities within a city or country, facilitating easy location of mosques through map integration. It serves as a centralized platform for donations and disseminates announcements pertinent to the community's activities and events.",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Flutter, Clean Architecture",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Actively participated in meetings, contributed to the development process, and ensured effective communication throughout the project.",
                tag: 1
            },
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 14,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/cover.jpg',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/2.jpg',
            mediaViewType: 'V'
        },
        name: 'Global Mobility',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/logo.svg',
        tags: [1, 2, 3, 4, 5, 6, 7],
        description: '',
        gallery: [
            // {
            //     mediaViewer: {
            //         image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/1.jpg',
            //         mediaViewType: 'V'
            //     },
            //     src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/1.jpg', type: 'image', highlightWord: '', tag: 2
            // },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/2.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/2.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/3.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/3.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/4.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/4.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/5.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/5.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/6.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/6.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/7.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/7.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/8.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/8.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/9.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/9.jpg', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/2x/10.jpg',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/mobile/global mobility/3x/10.jpg', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        // links: [
        //     {
        //         text: '',
        //         url: 'https://check.medxsol.com',
        //         clickableText: 'Visit the platform',
        //     }],
        aboutTitle: 'About the Project:',
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "An online Scooter renting app in Dubai city.",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Flutter, BloC, Clean Architecture, socket.io",
                tag: 1
            },
            {
                title: '# My Achievement:',
                boldSentence: 'My Achievement',
                description: "- Communicated with non-technical stuff and tester to resolve software issues.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "- Intergrated a map viewer widget with markers and tracking routes to enhance user situational awareness, aligning with the application's purpose.",
                tag: 1
            },

        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Visit', actionType: 'LINK', link: 'https://check.medxsol.com' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
    {
        id: 14,
        type: 'image',
        mediaUrl: 'https://odayali2249.github.io/portfolio-resources/resources/qi/logo.png',
        mediaViewer: {
            image: 'https://odayali2249.github.io/portfolio-resources/resources/qi/logo.png',
            mediaViewType: 'V'
        },
        name: 'Q Interpreter',
        logoUrl: 'https://odayali2249.github.io/portfolio-resources/resources/qi/logo.png',
        tags: [],
        description: '',
        gallery: [
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/qi/output.png',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/qi/output.png', type: 'image', highlightWord: '', tag: 2
            },
            {
                mediaViewer: {
                    image: 'https://odayali2249.github.io/portfolio-resources/resources/qi/chart.png',
                    mediaViewType: 'V'
                },
                src: 'https://odayali2249.github.io/portfolio-resources/resources/qi/chart.png', type: 'image', highlightWord: '', tag: 2
            },
        ],
        linksTitle: 'Links:',
        links: [
            {
                text: '',
                url: 'https://github.com/OdayAli2249/Q-Interpreter',
                clickableText: 'github',
            }],
        aboutTitle: 'About the Project:',
        hyperWords: new Map<string, string>([
            ["github", "https://github.com/OdayAli2249/Q-Interpreter"],
        ]),
        aboutItems: [
            {
                title: '# Description:',
                boldSentence: 'Description',
                description: "The Q Interpreter is a Java-based project developed using JavaCC, aimed at interpreting the Q programming language (my made up programming language :-) ). This project provides a parser capable of understanding Q code through the utilization of tokens and grammars defined in a .jj file. JavaCC then generates a set of files that serve as the lexical and syntax analyzers, constructing a parse tree from the input code.",
                tag: 1
            },
            {
                title: '',
                boldSentence: '',
                description: "Complete details on github",
                tag: 1
            },
            {
                title: '# Stack:',
                boldSentence: '# Stack:',
                description: "Java, JCC, Compiler Design, Software Engineering",
                tag: 1
            }
        ],
        options: [
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/visit.svg', label: 'Github', actionType: 'LINK', link: 'https://github.com/OdayAli2249/Q-Interpreter' },
            { icon: 'https://odayali2249.github.io/portfolio-resources/resources/details.svg', label: 'Details', actionType: 'DEFAULT' },
        ]
    },
]

export const projectsMap: Map<number, Project> = arrayToMap(projects);