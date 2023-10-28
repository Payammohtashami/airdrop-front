import React, { useRef } from 'react';
import VideoCard from './VideoCard';
import { Navigation } from 'swiper/modules';
import { VideosSlidesTypes } from '..';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import { SwiperNextNavigation, SwiperPrevNavigation } from '@/components/Swiper/Navigation';

const Videos: React.FC = () => {
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
            <h5 className='font-bold text-primary-400 text-2xl mb-4'>Videos</h5>
            <Swiper ref={sliderRef} className="bid-slider" {...settings}>
                {videosList.map((item) => (
                    <SwiperSlide key={item.id}>
                        <VideoCard {...item} />
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

const videosList: VideosSlidesTypes[] = [
    {
        id: 1,
        title: 'News title',
        image: '/images/airdrop-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        title: 'News title',
        image: '/images/airdrop-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 3,
        title: 'News title',
        image: '/images/airdrop-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 4,
        title: 'News title',
        image: '/images/airdrop-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 5,
        title: 'News title',
        image: '/images/airdrop-1.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
];

export default Videos;