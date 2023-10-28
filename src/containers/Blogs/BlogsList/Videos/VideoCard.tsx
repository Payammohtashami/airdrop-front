import React from 'react';
import Link from 'next/link';
import { VideosSlidesTypes } from '..';
import Image from 'next/image';
import routes from '@/constant/routes';
import { Button } from '@mui/material';

const VideoCard: React.FC<VideosSlidesTypes> = (props) => {
    return (
        <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1)'}} className='bg-white rounded-xl overflow-hidden mb-4'>
            <Link href={routes.Journal.news + '/' + props.id}>
                <div className='relative'>
                    <Image src="/images/play.png"  alt="play video button" height={56} width={56} className='absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2' />
                    <img src={props.image} className='w-full h-56 object-cover object-top' />
                </div>
                <div className='p-4'>
                    <h5 className='text-primary-500 text-xl mb-1 font-bold'>{props.title}</h5>
                    <p className='mb-4 text-sm'>{props.description}</p>
                    <Button variant='outlined' className='w-full !rounded-lg'>View</Button>
                </div>
            </Link>
        </div>
    );
};

export default VideoCard;