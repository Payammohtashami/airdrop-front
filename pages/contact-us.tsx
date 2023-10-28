import React from 'react';
import Contact from '@/containers/Contact';
import { NextSeo } from 'next-seo';


const ContactUsPage: React.FC = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | contact us'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <Contact />
        </>
    )
};

export default ContactUsPage;

export async function getStaticProps() {
    return {
        props: {}
    };
};