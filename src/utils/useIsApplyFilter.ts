import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const UseIsApplyFilter = (filterNames: string[]) => {
    const router = useRouter();
    const [isApplyFilter, setIsApplyFilter] = useState(false);

    useEffect(() => {
        const checkFilters = () => {
            for (const filterName of filterNames) {
                if (filterName in router.query) {
                    return true;
                }
            }
            return false;
        };

        const shouldApplyFilter = checkFilters();
        setIsApplyFilter(shouldApplyFilter);
    }, [router.query, filterNames]);

    return isApplyFilter;
};
