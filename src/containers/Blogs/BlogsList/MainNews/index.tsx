import React from 'react';
import BlogsCard from './BlogsCard';
import { BlogsCardTypes } from '..';
import Link from 'next/link';
import { Calendar, NextButton, StrokeHeart, View } from '@/components/Icon/Header';
import routes from '@/constant/routes';

const MainNews: React.FC = () => {
    const lastBlogs = blogsList[0];
    return (
            <div className='grid grid-cols-5 border-b gap-6 pb-6 mt-8'>
                <div className='col-span-5 md:col-span-3 bg-white rounded-xl overflow-hidden flex flex-col justify-between p-5' style={{boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.1)'}}>
                    <div>
                        <div className=''>
                            <Link href={routes.Journal.blog + '/' + lastBlogs?.id}>
                                <img src={lastBlogs.image} className='rounded-xl' />
                            </Link>
                            <h3 className='font-bold text-xl mt-4'>{lastBlogs.title}</h3>
                            <span className='text-primary-600 font-semibold'>{lastBlogs.subTitle}</span>
                            <p className='mt-1.5'>{lastBlogs.description}</p>
                        </div>

                        <div className='flex justify-between flex-col md:flex-row gap-4 items-center mt-4'>
                            <div className='flex gap-3'>
                                <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='flex gap-2 justify-center items-center bg-white rounded-xl px-2.5 py-1.5'>
                                    <View size={20} className='fill-sky-500' />
                                    <span className='text-sm'>{lastBlogs.views}</span>
                                </div>
                                <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='flex gap-2 justify-center items-center bg-white rounded-xl px-2.5 py-1.5'>
                                    <Calendar size={20} className='fill-sky-500' />
                                    <span className='text-sm'>{lastBlogs.date}</span>
                                </div>
                                <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='flex gap-2 justify-center items-center bg-white rounded-xl px-2.5 py-1.5'>
                                    <StrokeHeart size={20} className='fill-sky-500' />
                                    <span className='text-sm'>{lastBlogs.likes}</span>
                                </div>
                            </div>
                            <div>
                                <Link href={routes.Journal.blog + '/' + lastBlogs?.id} className='text-primary-600 flex items-center gap-2 hover:gap-5 transition-all'>
                                    Read more
                                    <NextButton size={12} />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-span-5 md:col-span-2'>
                    <h2 className='text-primary-400 mb-3 text-xl font-bold'>Recommended</h2>
                    <div className='grid grid-cols-1 md:grid-cols-1 gap-4 '>
                        {blogsList.map((item) => (
                            <BlogsCard {...item} key={item.id} />
                        ))}
                    </div>
                </div>
            </div>
    );
};

const blogsList: BlogsCardTypes[] = [
    {
        id: 'first-blog-text-1',
        date: '5 Jun',
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 'first-blog-text-2',
        date: '5 Jun',
        views: 240,
        likes: 19,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 'first-blog-text-3',
        date: '5 Jun',
        views: 240,
        likes: 24,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 'first-blog-text-4',
        date: '5 Jun',
        views: 240,
        likes: 24,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 'first-blog-text-5',
        date: '5 Jun',
        views: 240,
        likes: 24,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
];

export default MainNews;