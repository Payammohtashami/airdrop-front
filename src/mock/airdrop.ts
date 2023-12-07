export interface AirdropType {
    id: number,
    image: string,
    title: string,
    url: string,
    status: 'Live' | 'Closed',
    rewardPool: string,
    winner: string,
    startAt: number

};

export const AirdropsStates: AirdropType[] = [
    {
        id: 1,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 3000
    },
    {
        id: 2,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Closed',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 850
    },
    {
        id: 3,
        image: '/images/airdrop-1.jpg',
        title: 'Closed',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 1000
    },
    {
        id: 4,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 1100
    },
    {
        id: 5,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
    {
        id: 6,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
    {
        id: 7,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
    {
        id: 8,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
    {
        id: 9,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
    {
        id: 10,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
]
