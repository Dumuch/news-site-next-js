export const paths = {
    articles: 'articles',
};

const apiRoutes = {
    articles: {
        list: `/${paths.articles}`,
        popular: `/${paths.articles}/get-popular`,
    },
};

export default apiRoutes;
