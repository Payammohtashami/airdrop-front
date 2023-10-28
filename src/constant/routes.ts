interface RoutesType {
    base: string,
    telegramBot: string,
    contact: string,
    Journal: {
        base: string,
        blog: string,
        news: string
    },
}

const routes: RoutesType = {
    base: '/',
    telegramBot: 'telegram-bot',
    contact: 'contact-us',
    Journal: {
        base: '/blogs',
        blog: '/blog',
        news: '/news'
    },
};

export default routes;