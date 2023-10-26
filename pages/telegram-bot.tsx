import React from 'react';
import Home from '@/containers/Home';
import { NextSeo } from 'next-seo';


const HomePage = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | Telegram Bots'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <Home />
        </>
    )
};

export default HomePage;

export async function getStaticProps() {
    return {
        props: {}
    };
};