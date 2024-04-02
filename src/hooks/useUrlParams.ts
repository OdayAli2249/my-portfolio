import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export interface URLParams { tag?: number; recommendedTags?: number[], projectId?: number }
type SetURLParamsType = (nextURLParams: URLParams) => void;

export const useURLParams = (): [URLParams, SetURLParamsType] => {
    const location = useLocation();
    const navigate = useNavigate();

    const urlParams: URLParams = useMemo(() => {
        const searchParams = new URLSearchParams(location.search);
        const tag = parseInt(searchParams.get('tag') || '', 10) || undefined;
        const projectId = parseInt(searchParams.get('p') || '', 10) || undefined;
        const recommendedTags: number[] = searchParams.getAll('t').map(t => parseInt(t, 10));
        return { tag, recommendedTags, projectId };
    }, [location.search, location.hash]);

    const setURLParams: SetURLParamsType = useCallback(
        ({ tag, projectId }) => {
            const nextSearchParams = new URLSearchParams(location.search);
            if (tag !== undefined) nextSearchParams.set('tag', `${tag}`); else nextSearchParams.delete('tag');
            if (projectId !== undefined) nextSearchParams.set('p', `${projectId}`); else nextSearchParams.delete('p');
            navigate({ ...location, search: nextSearchParams.toString() });
        },
        [location.search, location.hash]
    );

    return [urlParams, setURLParams];
};

export default useURLParams;