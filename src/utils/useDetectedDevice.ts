import { DeviceSizeEnum } from '@/types/system.types';
import { useEffect, useState } from 'react';
import { appConfig } from '@/config/app';

const switchHandler = (innerWidth: number, widthScreen: number) => {
    return innerWidth <= widthScreen;
};

export const UseDetectedDevice = (): DeviceSizeEnum => {
    const [device, setDevice] = useState(DeviceSizeEnum.desktop);

    useEffect(() => {
        const setDeviceFunction = () => {
            switch (true) {
                case switchHandler(window.innerWidth, appConfig.mobileScreenWidth):
                    setDevice(DeviceSizeEnum.mobile);
                    break;
                case switchHandler(window.innerWidth, appConfig.tabletScreenWidth):
                    setDevice(DeviceSizeEnum.tablet);
                    break;
                case switchHandler(window.innerWidth, appConfig.desktopScreenWidth):
                    setDevice(DeviceSizeEnum.desktop);
                    break;
                default:
                    setDevice(DeviceSizeEnum.desktop);
            }
        };
        if (window) {
            setDeviceFunction();
            window.addEventListener('resize', setDeviceFunction);
        }

        return () => {
            window.removeEventListener('resize', setDeviceFunction);
        };
    }, []);

    return device;
};
