import { RoutesList } from '@/RoutesList';
import { useRouter } from 'next/router';

export const UseSearchHooks = (searchPath: RoutesList) => {
    const router = useRouter();

    const submit = (params: object) =>
        router.push({
            pathname: router.pathname !== searchPath ? searchPath : router.pathname,
            query: { ...router.query, ...params, page: 1 },
        });

    const clear = () => {
        router.push({
            pathname: router.pathname,
        });
    };
    return { submit, clear };
};
