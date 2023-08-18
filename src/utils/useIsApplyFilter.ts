import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const UseIsApplyFilter = (filterNames: string[]) => {
    const router = useRouter();
    const [isApplyFilter, setIsApplyFilter] = useState(false);

    useEffect(() => {
        for (const filterName of filterNames) {
            if (router.query.hasOwnProperty(filterName)) {
                setIsApplyFilter(true);
                return;
            }
        }

        setIsApplyFilter(false);
    }, [router.query]);
    return isApplyFilter;
};
