import { feeders, initialPercentage, needs } from "./data";
import { Component, Need } from "./types";



const check = (components: Component[]): boolean => {
    for (const need of needs.get('eggs-1-to-4')!) {
        const component = components.find(comp => comp.name === need.name);
        if (!component) return false;
        let value = component.value;
        if (Array.isArray(need.value) && need.op === 'BT') {
            if (value < need.value[0] || value > need.value[1]) return false;
        } else {
            switch (need.op) {
                case 'EQ':
                    if (Math.abs(value - (need.value as number)) > (need.uncertaintyRate ?? 0)) return false;
                    break;
                case 'LT':
                    if (value > (need.value as number)) return false;
                    break;
                case 'GT':
                    if (value < (need.value as number)) return false;
                    break;
                default:
                    return false;
            }
        }
    }
    return true;
}

const proteinTune = (alpha: number, entity: string, initialPercentage: Map<string, number>,
    feeders: Map<string, number[]>, moreProteinLessCalories: string, lessProteinMoreCalories: string):
    Map<string, number> => {

    var initialProteinAmount = 0;
    var initialTotalAmount = 0;
    Array.from(initialPercentage.entries()).map(([name, percentage]) => {
        const proteinPercentage = feeders.get(name)?.[0]!
        const proteinAmount = (proteinPercentage * percentage) / 100;
        initialProteinAmount += proteinAmount;
        initialTotalAmount += percentage;
    })

    const neededProtein = 10 * (needs.get(entity)?.[2]!.value as number) / alpha;

    const restAmount = 100 - initialTotalAmount;
    const restProteinAmount = neededProtein - initialProteinAmount;

    const restProteinPercentage = (restProteinAmount * 100) / restAmount;

    const moreProteinPercentage = feeders.get(moreProteinLessCalories)?.[0]!;
    const lessProteinPercentage = feeders.get(lessProteinMoreCalories)?.[0]!;

    const desiredMoreProteinPercentage = Math.abs(lessProteinPercentage - restProteinPercentage);
    const desiredLessProteinPercentage = Math.abs(moreProteinPercentage - restProteinPercentage);
    const lessAndMoreProtein = Math.abs(moreProteinPercentage - lessProteinPercentage);

    const moreAmount = (desiredMoreProteinPercentage * restAmount) / lessAndMoreProtein;
    const lessAmount = (desiredLessProteinPercentage * restAmount) / lessAndMoreProtein;
    // const roundedMoreAmount = Math.round(moreAmount * 10) / 10;
    // const roundedLessAmount = Math.round(lessAmount * 10) / 10;
    const roundedMoreAmount = moreAmount;
    const roundedLessAmount = lessAmount;

    let loadPercentage = new Map(initialPercentage);
    loadPercentage.set(moreProteinLessCalories, roundedMoreAmount);
    loadPercentage.set(lessProteinMoreCalories, roundedLessAmount);

    // temp
    var loadProteinAmount = 0;
    var loadCaloriesAmount = 0;
    Array.from(loadPercentage.entries()).map(([name, percentage]) => {
        const proteinPercentage = feeders.get(name)?.[0]!
        const proteinAmount = (proteinPercentage * percentage) / 100;
        loadProteinAmount += proteinAmount;

        const caloriesPercentage = feeders.get(name)?.[1]!
        const caloriesAmount = (caloriesPercentage * percentage) / 100;
        loadCaloriesAmount += caloriesAmount;
    })

    return loadPercentage;
}

const caloriesTune = (uncertaintyRate: number, entity: string, initialPercentage: Map<string, number>,
    feeders: Map<string, number[]>, lessCalories: string, moreCalories: string):
    Map<string, number> => {

    var currentProteinAmount = 0;
    var currentCaloriesAmount = 0;
    Array.from(initialPercentage.entries()).map(([name, percentage]) => {
        const proteinPercentage = feeders.get(name)?.[0]!
        const proteinAmount = (proteinPercentage * percentage) / 100;
        currentProteinAmount += proteinAmount;

        const caloriesPercentage = feeders.get(name)?.[1]!
        const caloriesAmount = (caloriesPercentage * percentage) / 100;
        currentCaloriesAmount += caloriesAmount;
    })

    const neededCalories = needs.get(entity)?.[2]!.value as number;

    const difference = neededCalories - currentCaloriesAmount;

    if (Math.abs(difference) <= (uncertaintyRate ?? 0)) {
        return initialPercentage;
    } else {
        const replacementFeeder = 'Yellow corn';
        const caloriesFeeder = difference > 0 ? moreCalories : lessCalories;
        const replacementCalories = Math.abs(feeders.get(caloriesFeeder)?.[1]! - feeders.get(replacementFeeder)?.[1]!);
        const amountToReplace = (100 * difference) / replacementCalories;

        let loadPercentage = new Map(initialPercentage);
        loadPercentage.set(replacementFeeder, initialPercentage.get(replacementFeeder)! - amountToReplace);
        loadPercentage.set(caloriesFeeder, amountToReplace);

        return loadPercentage;
    }
}


// const alpha = 150;
const alpha = 158.8;
const entity = 'eggs-21-to-43';
const premixPercentage = 10;
const premixValues = [45, 210, 4.3, 2, 8, 3.8, 2, 1.3, 0];

const moreProteinLessCalories = 'Soybean meal';
const lessProteinMoreCalories = 'Barley';

const uncertaintyRate = 0.3;
const lessCalories = 'Bran';
const moreCalories = 'Animal fat';

export const run = (): Map<string, number> => {
    // const r1 = check(components);
    // console.log(r1);

    feeders.set('Premix', premixValues);
    initialPercentage.set('Premix', premixPercentage);
    const proteinTunedFeedMixture = proteinTune(alpha, entity, initialPercentage, feeders, moreProteinLessCalories, lessProteinMoreCalories);
    const caloriesTunedFeedMixture = caloriesTune(uncertaintyRate, entity, proteinTunedFeedMixture, feeders, lessCalories, moreCalories);

    console.log(proteinTunedFeedMixture, caloriesTunedFeedMixture);


    var loadProteinAmount = 0;
    var loadCaloriesAmount = 0;
    var loadFatAmount = 0;
    var loadFiberAmount = 0;
    var loadCaAmount = 0;
    var loadPAmount = 0;
    var loadLysAmount = 0;
    var loadMthAmount = 0;
    var loadSysAmount = 0;
    Array.from(caloriesTunedFeedMixture.entries()).map(([name, percentage]) => {
        const proteinPercentage = feeders.get(name)?.[0]!
        const proteinAmount = (proteinPercentage * percentage) / 100;
        loadProteinAmount += proteinAmount;

        const caloriesPercentage = feeders.get(name)?.[1]!
        const caloriesAmount = (caloriesPercentage * percentage) / 100;
        loadCaloriesAmount += caloriesAmount;

        const fatPercentage = feeders.get(name)?.[2]!
        const fatAmount = (fatPercentage * percentage) / 100;
        loadFatAmount += fatAmount;

        const fiberPercentage = feeders.get(name)?.[3]!
        const fiberAmount = (fiberPercentage * percentage) / 100;
        loadFiberAmount += fiberAmount;

        const caPercentage = feeders.get(name)?.[4]!
        const caAmount = (caPercentage * percentage) / 100;
        loadCaAmount += caAmount;

        const pPercentage = feeders.get(name)?.[5]!
        const pAmount = (pPercentage * percentage) / 100;
        loadPAmount += pAmount;

        const lysPercentage = feeders.get(name)?.[6]!
        const lysAmount = (lysPercentage * percentage) / 100;
        loadLysAmount += lysAmount;

        const mthPercentage = feeders.get(name)?.[7]!
        const mthAmount = (mthPercentage * percentage) / 100;
        loadMthAmount += mthAmount;

        const sysPercentage = feeders.get(name)?.[8]!
        const sysAmount = (sysPercentage * percentage) / 100;
        loadSysAmount += sysAmount;
    })

    return caloriesTunedFeedMixture;
}