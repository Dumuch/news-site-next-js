import { useEffect, useState } from 'react';

/**
 * checks whether user has scrolled past given threshold
 * @param  {number} scrollValue Scroll threshold to trigger after
 * @returns {{hasScrolled: boolean}} Object with hasScrolled flag
 */
export const useScroll = (scrollValue: number = 50) => {
    const [hasScrolled, setHasScrolled] = useState(false);
    useEffect(() => {
        const scrollListener = () => {
            setHasScrolled(window.scrollY > scrollValue);
        };
        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    return { hasScrolled };
};
