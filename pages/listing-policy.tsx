import React from 'react';
import ListingPolicy from '@/containers/ListingPolicy';
import { NextSeo } from 'next-seo';


const ListingPolicyPage: React.FC = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | Listing Policy'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <ListingPolicy />
        </>
    )
};

export default ListingPolicyPage;

export async function getStaticProps() {
    return {
        props: {}
    };
};