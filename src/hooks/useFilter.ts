import { useCallback, useMemo } from 'react';
import { Project } from '../pages/Projects/interfaces';
import useURLParams from './useUrlParams';
import { projects } from '../pages/Projects/data';
import { Item } from '../components/SelectableItemList/interfaces';

type SetFilterCriteriaType = (item?: Item) => void;
type InitailFilter = { item: number };

export const useFilter = (): [Project[], SetFilterCriteriaType, InitailFilter | undefined] => {
    const [urlParams, setUrlParams] = useURLParams();

    const initailFilter: InitailFilter | undefined = useMemo(() => {

        const _initailFilter: InitailFilter | undefined = !!urlParams.tag ? { item: urlParams.tag } : undefined;

        return _initailFilter;
    }, [urlParams]);

    const filteredProjects: Project[] = useMemo(() => {

        const filteredProjects: Project[] = !!urlParams.tag && urlParams.tag !== -1 ?
            projects.filter(project => project.tags.includes(urlParams.tag!)) : projects;

        return filteredProjects;
    }, [urlParams]);

    const setFilter: SetFilterCriteriaType = useCallback(
        item => setUrlParams({ ...urlParams, tag: item?.id }), [setUrlParams]);
    return [filteredProjects, setFilter, initailFilter];
};

export default useFilter;