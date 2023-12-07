import Icon from '@/components/Icon';
import useTimer from '@/hooks/useTimer';
import { AirdropType } from '@/mock/airdrop';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header: React.FC<any> = ({data}) => {
    // const { image, rewardPool, startAt, status, title, url, winner }: AirdropType = data;
    const route = ["Project / ", data?.url];

    // timer handler
    const { handleStart, timer } = useTimer();
    useEffect(() => {
        handleStart(data?.startAt);
    }, [data]);
    return (
        <div className='mt-14'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div >
                    {route.map((item,index) => <Link href="/airdrop" className='last:pointer-events-none last:font-extrabold' key={index}>{item}</Link>)}
                </div>
                <div className='flex items-center gap-3 justify-between md:justify-start mt-5 md:mt-0'>
                    <p className='text-slate-500'>Time Left For the Drop</p>
                    <div className='flex gap-3'>
                        <span className='flex items-center justify-center bg-white rounded-lg md:text-lg font-bold w-8 md:w-10 h-8 md:h-10 shadow'>{timer?.day}</span>
                        <span className='flex items-center justify-center bg-white rounded-lg md:text-lg font-bold w-8 md:w-10 h-8 md:h-10 shadow'>{timer?.hours}</span>
                        <span className='flex items-center justify-center bg-white rounded-lg md:text-lg font-bold w-8 md:w-10 h-8 md:h-10 shadow'>{timer?.minutes}</span>
                        <span className='flex items-center justify-center bg-white rounded-lg md:text-lg font-bold w-8 md:w-10 h-8 md:h-10 shadow'>{timer?.seconds}</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between my-7 md:mt-11'>
                <div className='flex items-center gap-3'>
                    <Image src={data?.logo} width={0} height={0} className='w-12 md:w-16 h-12 md:h-16 rounded-full' sizes='100vw' alt='' />
                    <h4 className='font-black text-2xl'>{data?.title}</h4>
                </div>
                <div className='flex items-center gap-2 md:gap-3'>
                    {data?.links?.telegram ?
                        <Link href={data?.links?.telegram}>
                            <Icon name="telegram" size={28} />
                        </Link>
                    : ""}
                    {data?.links?.discord ?
                        <Link href={data?.links?.discord}>
                            <Icon name="discord" size={28} />
                        </Link>
                    : ""}
                    {data?.links?.twitter ?
                        <Link href={data?.links?.twitter}>
                            <Icon name="twitter" size={28} />
                        </Link>
                    : ""}
                    {data?.links?.youtube ?
                        <Link href={data?.links?.youtube}>
                            <Icon name="youtube" size={28} />
                        </Link>
                    : ""}
                </div>
            </div>
        </div>
    );
};

export default Header;