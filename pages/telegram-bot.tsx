import React from 'react';
import TelegramBots from '@/containers/TelegramBots';
import { NextSeo } from 'next-seo';


const TelegramBotsPage = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | Telegram Bots'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <TelegramBots />
        </>
    )
};

export default TelegramBotsPage;

export async function getStaticProps() {
    return {
        props: {}
    };
};