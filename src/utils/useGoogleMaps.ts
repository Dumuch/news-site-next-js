import { useLoadScript } from '@react-google-maps/api';
const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_MAPS_KEY ?? '';

export const useGoogleMaps = () => {
    const { isLoaded } = useLoadScript({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_KEY,
        libraries: ['places'],
    });
    return { isLoaded };
};
