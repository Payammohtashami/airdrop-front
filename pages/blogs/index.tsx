import React from 'react';
import BlogsList from '@/containers/Blogs/BlogsList';
import { NextSeo } from 'next-seo';


const BlogsPage: React.FC = () => {
    return (
        <>
            <NextSeo 
                title='Airdrop | Blogs page'
                description='Be the first to hear about pre-sales and unexplored projects.'
            />
            <BlogsList />
        </>
    )
};

export default BlogsPage;

export async function getStaticProps() {
    return {
        props: {}
    };
};