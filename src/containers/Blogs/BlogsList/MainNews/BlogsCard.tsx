import React from 'react';
import Link from 'next/link';
import { BlogsCardTypes } from '..';
import { Calendar, View } from '@/components/Icon/Header';
import routes from '@/constant/routes';

const BlogsCard: React.FC<BlogsCardTypes> = (props) => {
    return (
        <div className='flex gap-3 '>
            <Link href={routes.Journal.blog + '/' + props?.id} className='w-40 h-24 rounded-xl overflow-hidden'>
                <img src={props.image} className='h-full w-full object-cover object-top' />
            </Link>
            <div className='flex flex-col justify-between'>
                <h4 className='mb-2 text-sm font-bold lg:text-base'>{props.title}</h4>
                <div className=''>
                    <div className='flex gap-3'>
                        <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='bg-white flex gap-2 items-center justify-center rounded-lg px-1.5'>
                            <View size={16} className='fill-sky-600' />
                            <span className='text-sm'>{props?.views}</span>
                        </div>
                        <div style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.08)'}} className='bg-white flex gap-2 items-center justify-center rounded-lg p-1.5'>
                            <Calendar size={16} className='fill-sky-600' />
                            <span className='text-sm'>{props.date}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogsCard;