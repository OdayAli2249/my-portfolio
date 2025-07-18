
export const tags: Map<number, string> = new Map<number, string>([
    [-1, "All"],
    [1, "Node.js"],
    [8, "Nest.js"],
    [2, "React.js"],
    [3, "TypeScript"],
    [4, "MaterialUI"],
    [5, "Cloud Messaging"],
    [6, "React query"],
    [7, "Vite"],
    [9, "Dependency Injection"],
    [10, "Sequelize ORM"],
    [11, "Postgresql"],
    [12, "Redux"],
    [13, "Axios"],
    [14, "Sass"],
    [15, "TailwindCss"],
    [16, "Flutter"],
    [17, "BLoC"],
    [18, "FCM"],
    [19, "Clean architecture"],
    // [20, "MVVM"],
    // [21, "GetX"],
    [22, "java"],
    // [23, "Compiler Design"],
    [24, "Software Engineering"],
    // [25, "CI/CD"],
    [26, "Responsive Design"],
    //  [27, "Artificial Intelligence"],
    // [28, "Expert System"],
    // [29, "Fuzzy Logic"],
    //  [30, "Game"],
    // [31, "Physics Engine"],
    // [32, "Scientific Computation"],
    [33, "Python"],
    // [34, "Machine Learning"],
    // [35, "Computer Vision"],
    // [36, "Intelligence Search Algorithm"],
    [37, "OOP"],
    // [38, "Multithreaded programming"],
    // [39, "AWS"],
    //[40, "C#"]
]);

export const secondaryTags: Map<number, string> = new Map<number, string>([
    [1, "FCM"],
    // [1, "Concurrent Programming"],
    // [2, "Programming language"],
    // [3, "Object Oriented Programming"],
    // [4, "Data Structures"],
    // [5, "Algorithms"],
    // [6, "Computational Science"],
    // [7, "Numerical Simulation"],
    // [8, "Modeling"],
    // [9, "Virtualization:"],
    // [10, "Simulator"]
]);

export const tagToAssociatedSecondaryTags: { [key: number]: number[] } = {
    1: [1],
    2: [2],
    4: [3],
    5: [1],
    8: [6, 7],
    10: [8, 9, 10]
};

export const groupsTitle: string[] = ['Recommended', 'Proficient', 'Other'];
export const basicTags = [2, 3, 4, 26, 24, 12, 14, 15, 7,
    // 22, 38,
    6, 13, 37];

export const tagsObject = {
    primary: {
        multithreadsProgramming: 1,
        java: 2,
        gamesDevelopment: 3,
        oop: 4,
        dataStructuresAndAlgorithms: 5,
        problemSolving: 6,
        physicsEngine: 7,
        scientificComputation: 8,
        openGL: 9,
        simulation: 10
    },
    secondary: {
        concurrentProgramming: 1,
        programminglanguage: 2,
        objectOrientedProgramming: 3,
        dataStructures: 4,
        algorithms: 5,
        computationalScience: 6,
        numericalSimulation: 7,
        modeling: 8,
        virtualization: 9
    }
}
