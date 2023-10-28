import React from 'react';
import { NewsSlidesTypes } from '..';
import Link from 'next/link';
import routes from '@/constant/routes';
import { Button } from '@mui/material';
import { StrokeHeart, View } from '@/components/Icon/Header';

const NewCard: React.FC<NewsSlidesTypes> = (props) => {
    return (
        <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.1)'}} className='bg-white rounded-xl overflow-hidden mb-4'>
            <Link href={routes.Journal.news + '/' + props.id}>
                <div className='relative'>
                    <img src={props.image} className='w-full h-56 object-cover object-top' />
                </div>
                <div className='p-4'>
                    <h5 className='text-primary-500 text-xl mb-1 font-bold'>{props.title}</h5>
                    <p className='mb-4 text-sm'>{props.subTitle}</p>
                    <div className='flex gap-3 mb-4'>
                        <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='bg-white flex gap-2 items-center justify-center rounded-lg px-1.5'>
                            <View size={16} className='fill-sky-600' />
                            <span className='text-sm'>{props?.views}</span>
                        </div>
                        <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='bg-white flex gap-2 items-center justify-center rounded-lg p-1.5'>
                            <StrokeHeart size={16} className='fill-sky-600' />
                            <span className='text-sm'>{props.likes}</span>
                        </div>
                    </div>
                    <Button variant='outlined' className='w-full !rounded-lg'>View</Button>
                </div>
            </Link>
        </div>
    );
};

export default NewCard;