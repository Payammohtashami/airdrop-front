import React from 'react';
import Home from '@/containers/Home';
import { NextSeo } from 'next-seo';


const HomePage = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | Home page'
                description='Find new crypto airdrops before other'
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