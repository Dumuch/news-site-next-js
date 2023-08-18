export const paths = {
    articles: 'articles',
};

const apiRoutes = {
    articles: {
        list: `/${paths.articles}`,
        popular: `/${paths.articles}/get-popular`,
        latest: `/${paths.articles}/get-latest`,
        search: `/${paths.articles}/search`,
        categories: `/${paths.articles}/get-categories`,
    },
};

export default apiRoutes;
