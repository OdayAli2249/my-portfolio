import { useMemo } from "react";
import { basicTags, groupsTitle, tags } from "../utils/constants";
import useURLParams from "./useUrlParams";
import { Group, Item as GroupItem } from "../components/SelectableItemList/interfaces";

export const useGroup = (): [Group[], GroupItem] => {

    const [urlParams, _] = useURLParams();
    const _recommended: number[] = urlParams.recommendedTags || [];
    const _profession: number[] = basicTags;
    const _all: number[] = Array.from(tags.keys());

    function setDifference(A: number[], B: number[]): number[] {
        const setB = new Set(B);
        return A.filter(num => !setB.has(num));
    }

    const groups: Group[] = useMemo(() => {

        const recommended = [-1, ..._recommended];
        const profession = setDifference(_profession, recommended);
        const experience = setDifference(_all, _profession.concat(recommended));
        const numberGroups = [recommended, profession, experience]

        const _groups: Group[] = numberGroups.map((numberGroup, index) => {
            return {
                title: groupsTitle[index],
                items: numberGroup.map(numberGroup => {
                    return {
                        icon: '/look-up-svgrepo-com.svg',
                        label: tags.get(numberGroup),
                        id: numberGroup
                    } as GroupItem
                })
            } as Group
        })

        return _groups;

    }, [urlParams.recommendedTags]);

    const initialItem = groups[0].items[0];

    return [groups, initialItem];

};