import React from 'react';
import AirdropDetails from '@/containers/Airdrop/AirdropDetails';
import { NextSeo } from 'next-seo';


const AirdropPages: React.FC = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | airdrops'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <AirdropDetails />
        </>
    )
};

export default AirdropPages;
