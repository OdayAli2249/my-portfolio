
export const tags: Map<number, string> = new Map<number, string>([
    [-1, "All"],
    [1, "Multithreads Programming"],
    [2, "java"],
    [3, "2D Games Development"],
    [4, "OOP"],
    [5, "Data Structures and Algorithms"],
    [6, "Problem Solving"],
    [7, "Physics Engine"],
    [8, "Scientific Computation"],
    [9, "OpenGL"],
    [10, "Simulation"]
]);

export const secondaryTags: Map<number, string> = new Map<number, string>([
    [1, "Concurrent Programming"],
    [2, "Programming language"],
    [3, "Object Oriented Programming"],
    [4, "Data Structures"],
    [5, "Algorithms"],
    [6, "Computational Science"],
    [7, "Numerical Simulation"],
    [8, "Modeling"],
    [9, "Virtualization:"],
    [10, "Simulator"]
]);

export const tagToAssociatedSecondaryTags: { [key: number]: number[] } = {
    1: [1],
    2: [2],
    4: [3],
    5: [4, 5],
    8: [6, 7],
    10: [8, 9, 10]
};

export const groupsTitle: string[] = ['Recommended', 'Profession', 'Experience'];
export const basicTags = [2, 5, 6];

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
