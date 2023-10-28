import React from 'react';
import MainNews from './MainNews';
import NewsList from './NewsList';
import Videos from './Videos';

export type BlogsCardTypes = {
    id: string | number,
    date: string,
    image: string,
    title: string,
    views: number,
    likes: number,
    subTitle: string,
    description: string | null
};

export type VideosSlidesTypes = {
    id: string | number,
    title: string,
    image: string,
    description: string,
};

export type NewsSlidesTypes = {
    id: string | number,
    views: number,
    likes: number,
    title: string,
    image: string,
    subTitle: string,
};

const BlogsList: React.FC = () => {
    return (
        <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
            <MainNews />
            <NewsList />
            <Videos />
        </div>
    );
};

export default BlogsList;