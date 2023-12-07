export interface RoutesType {
    base: string,
    telegramBot: string,
    contact: string,
    listingPolicy: string,
    blog: {
        base: string,
        detail: (id: string | number) => string,
    },
    airdrop: {
        base: string,
        detail: (id: string | number) => string,
    },
}

const routes: RoutesType = {
    base: '/',
    listingPolicy: 'listing-policy',
    telegramBot: 'telegram-bot',
    contact: 'contact-us',
    blog: {
        base: '/blog',
        detail: (id: string | number) => `/blog/${id ?? ''}`
    },
    airdrop: {
        base: '/airdrop',
        detail: (id: string | number) => `/airdrop/${id ?? ''}`
    }
};

export default routes;