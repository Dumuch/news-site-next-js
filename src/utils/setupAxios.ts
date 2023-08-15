import { AxiosInstance } from 'axios';

function createAppVersionChecker() {
    let lastAppVersion: string | null = null;
    let isReloading = false;
    return function (currAppVersion?: string) {
        if (!currAppVersion) {
            return;
        }
        if (!lastAppVersion) {
            lastAppVersion = currAppVersion;
            console.log('App Version:', currAppVersion);
            return;
        }
        if (lastAppVersion !== currAppVersion && !isReloading) {
            isReloading = true;
            setTimeout(() => {
                window.location.reload();
                isReloading = false;
            }, 5000);
        }
    };
}

export const setupAxios = (axios: AxiosInstance) => {
    const appVersionChecker = createAppVersionChecker();

    axios.interceptors.response.use(
        (response) => {
            const { data, appVersion } = response.data;
            appVersionChecker(appVersion);
            return data ? { ...response, data } : response;
        },
        async (e) => {
            return Promise.reject(e);
        },
    );
};
