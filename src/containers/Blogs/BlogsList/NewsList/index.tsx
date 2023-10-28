import React, { useRef } from 'react';
import Link from 'next/link';
import NewCard from './NewCard';
import { NextButton } from '@/components/Icon/Header';
import { Navigation } from 'swiper/modules';
import { NewsSlidesTypes } from '..';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { SwiperNextNavigation, SwiperPrevNavigation } from '@/components/Swiper/Navigation';

const NewsList: React.FC = () => {
    const sliderRef = useRef<any>(null);
    const settings: SwiperProps = {
        modules: [Navigation],
        freeMode: false,
        navigation: true,
        pagination:{ clickable: true },
        spaceBetween: 32,
        slidesPerView: 3,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 16,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
        },
    };
    return (
        <div className='my-16'>
            <div className='flex justify-between w-full items-center gap-6'>
                <h5 className='font-bold text-primary-400 text-2xl mb-4'>News</h5>
                <Link href='#' className='text-slate-500 flex items-center text-sm gap-2 font-medium hover:gap-4 transition-all'>
                    View All
                    <NextButton size={10} fill='rgb(100 116 139)' />
                </Link>
            </div>
            <Swiper ref={sliderRef} className="bid-slider" {...settings}>
                {newsList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <NewCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex items-center justify-center gap-x-4 mt-2'>
                <SwiperPrevNavigation  sliderRef={sliderRef} />
                <SwiperNextNavigation sliderRef={sliderRef} />
            </div>
        </div>
    );
};

const newsList: NewsSlidesTypes[] = [
    {
        id: 1,
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 2,
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 3,
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 4,
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 5,
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
    },
    {
        id: 6,
        views: 240,
        likes: 121,
        image: '/images/airdrop-1.jpg',
        title: 'First Blogs Title',
        subTitle: 'Lorem ipsum dolor sit amet',
    },
];

export default NewsList;