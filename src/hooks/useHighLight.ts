import { useMemo } from 'react';
import useURLParams from './useUrlParams';
import { projectsMap } from '../pages/Projects/data';
import { secondaryTags, tagToAssociatedSecondaryTags, tags } from '../utils/constants';

type HighLightedWordsType = { primary?: string[], secondary?: string[] };

export const useHighLight = (): HighLightedWordsType | undefined => {
    const [urlParams, _] = useURLParams();

    function getAssociatedSecondaryTags(tagNumbers: number[]): string[] {
        const tagValues: string[] = [];
        tagNumbers.forEach(tagNumber => {
            const tagValue = tags.get(tagNumber);
            if (tagValue) tagValues.push(tagValue);
            const associatedSecondaryTags = tagToAssociatedSecondaryTags[tagNumber];
            if (associatedSecondaryTags) {
                associatedSecondaryTags.forEach(secondaryTagNumber => {
                    const secondaryTagValue = secondaryTags.get(secondaryTagNumber);
                    if (secondaryTagValue) tagValues.push(secondaryTagValue);
                });
            }
        });
        return tagValues;
    }

    const highLightedWords: HighLightedWordsType | undefined = useMemo(() => {
        const _project = !!urlParams.projectId ? projectsMap.get(urlParams.projectId!) : undefined;
        const _tag = urlParams.tag;

        const _highLightedWords: HighLightedWordsType | undefined =
        {
            primary: _tag ? getAssociatedSecondaryTags([_tag]).map(tag => tag.toLocaleLowerCase()) : undefined,
            secondary: _project ? getAssociatedSecondaryTags(_project.tags).map(tag => tag.toLocaleLowerCase()) :
                undefined
        };

        return _highLightedWords;
    }, [urlParams.projectId, urlParams.tag]);

    return highLightedWords;
};

export default useHighLight;