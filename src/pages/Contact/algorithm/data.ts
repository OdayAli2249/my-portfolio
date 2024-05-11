import { Component, Need } from "./types";


export const needs: Map<string, Need[]> = new Map<string, Need[]>([
    ['eggs-1-to-4', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 20, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 280, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 1, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['eggs-1-to-4', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 17.5, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 260, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 1.1, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['eggs-5-to-13', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 13.5, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 250, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 1.2, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['eggs-14-to-20', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 13.5, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 250, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 1.2, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['eggs-21-to-43', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 17, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 270, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: [3.1, 3.2], op: 'BT', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['eggs-44-to-60', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 16, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 270, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 3, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['eggs-61-to-74', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 14, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 250, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: [2.8, 3], op: 'BT', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['chicken-1-to-2', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 23, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 310, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 1, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['chicken-3-to-5', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 19, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 315, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 1, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
    ['chicken-6-to-7', [{ name: 'AMOUNT', value: 100, op: 'EQ', unit: 'Kg' }, { name: 'PROTEIN', value: 17, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }, { name: 'CALORIES', value: 315, op: 'EQ', uncertaintyRate: 0.2, unit: 'Thorm' }, { name: 'Ca', value: 0.9, op: 'EQ', uncertaintyRate: 0.2, unit: 'Percentage' }]],
]);

export const feeders: Map<string, number[]> = new Map<string, number[]>([
    ['Yellow corn', [9, 343, 4, 2, 0.02, 0.27, 0.2, 0.18, 0.18]],
    ['Wheat bran', [12, 325, 2, 2, 0.04, 0.39, 0.4, 0.17, 0.22]],
    ['Barley', [11, 250, 2, 6, 0.07, 0.36, 0.5, 0.17, 0.2]],
    ['Bran', [15, 125, 4, 10, 0.1, 1.2, 0.5, 0.17, 0.2]],
    ['Animal fat', [0, 700, 100, 0, 0, 0, 0, 0, 0]],
    ['Vegetable oil', [0, 800, 100, 0, 0, 0, 0, 0, 0]],
    ['Fish meal', [60, 297, 8, 1, 6, 3, 6, 1.8, 0.94]],
    ['Meat and bone meal', [50, 198, 10, 2, 10.6, 5.1, 3.5, 0.7, 0.6]],
    ['Soybean meal', [44, 224, 1, 6, 0.25, 0.6, 3.2, 0.74, 0.83]],
    ['Cottonseed meal', [41, 190, 2, 13, 0.2, 1.2, 1.6, 0.6, 1]],
    ['Limestone powder', [0, 0, 0, 0, 35, 0, 0, 0, 0]],
    ['Dicalcium phosphate', [0, 0, 0, 0, 23, 18, 0, 0, 0]],
]);

export const initialPercentage: Map<string, number> = new Map<string, number>([
    ['Yellow corn', 50],
    ['Cottonseed meal', 5],
    ['Limestone powder', 7]
]);

export const components: Component[] = [
    {
        name: 'AMOUNT',
        value: 100,
    },
    {
        name: 'PROTEIN',
        value: 17,

    },
    {
        name: 'CALORIES',
        value: 270,
    },
    {
        name: 'FATS',
        value: 7,
    },
    {
        name: 'FIBERS',
        value: 7,
    },
    {
        name: 'Ca',
        value: 3.1,
    }
];