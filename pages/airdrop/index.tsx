import React from 'react';
import AridropList from '@/containers/Airdrop/AirdropList';
import { NextSeo } from 'next-seo';


const AirdropPages: React.FC = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | airdrops list'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <AridropList />
        </>
    )
};

export default AirdropPages;

export async function getStaticProps() {
    return {
        props: {}
    };
};