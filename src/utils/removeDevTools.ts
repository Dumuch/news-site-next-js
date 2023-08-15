function isFunction(obj: object) {
    return typeof obj === 'function';
}

function isObject(obj: object) {
    const type = typeof obj;

    return type === 'function' || (type === 'object' && !!obj);
}

export const removeDevTools = () => {
    if (process.env.NEXT_PUBLIC_REACT_APP_DEVELOP === 'false') {
        if (typeof window !== 'undefined' && window.document) {
            // @ts-ignore
            if (!isObject(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)) {
                return;
            }

            // @ts-ignore
            for (const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
                if (prop === 'renderers') {
                    // @ts-ignore
                    window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
                    continue;
                }
                // @ts-ignore
                window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = isFunction(window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop])
                    ? Function.prototype
                    : null;
            }
        }
    }
};
