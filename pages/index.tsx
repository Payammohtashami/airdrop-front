import React from 'react';
import Home from '@/containers/Home';
import { NextSeo } from 'next-seo';


const HomePage: React.FC = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | Home page'
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