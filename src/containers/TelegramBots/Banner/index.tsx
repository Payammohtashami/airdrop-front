import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import { Gift, Bonuse, System, Shield, Grows, Manage, Docs, Balance, Pointer } from "@/components/Icon/Header"
const Banner = () => {
    const liStylesClass = 'cursor-pointer border-b border-slate-100 py-5 px-6 last:border-0 hover:bg-slate-100/80 flex items-center gap-3 font-medium text-lg transition-all';
    return (
        <div className='grid grid-cols-3 bg-white p-4 gap-2 mt-10 rounded-2xl' style={{boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)'}}>
            <div className='col-span-3 md:col-span-2 mb-5 md:p-5 md:mb-0'>
                <div className='w-full'>
                    <Link href="#">
                        <img src='/images/telegramBot/banner.png' alt='banner' className='w-full' />
                    </Link>
                </div>
                <div className='flex items-center flex-col md:flex-row justify-between mt-8'>
                    <div>
                        <span className='text-primary-400 block font-bold text-xl md:text-2xl lg:text-2xl'>If you want to learn </span>
                        <span className='block font-bold text-xl md:text-2xl lg:text-2xl'>more about bot features</span>
                    </div>
                    <div className='flex relative mt-6 md:mt-0' >
                        <Pointer className='absolute w-7 z-10 mt-7 ml-28 sm:mt-2 md:ml-36 lg:ml-40 lg:mt-4 xl:ml-44' />
                        <Button 
                            variant='contained' 
                            sx={{
                                px: 3,
                                boxShadow: 'none',
                                position: 'relative',
                                fontSize: 24,
                                fontWeight: 700,
                                borderRadius: 12,
                                '&::before': {
                                    zIndex: 1,
                                    border: '3px solid #000',
                                    content: '""',
                                    position: 'absolute',
                                    borderRadius: 12,
                                    top: '-5px',
                                    left: '-6px',
                                    width: '100%',
                                    height: '100%',
                                },
                            }}
                        >
                            Click Here
                        </Button>
                    </div>
                </div>
            </div>
            
            <div style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'}} className='bg-white rounded-xl col-span-3 md:col-span-1'>
                <ul>
                    <li className={liStylesClass}><Manage />Management Panel</li>
                    <li className={liStylesClass}><Docs />Up to 5 Tasks</li>
                    <li className={liStylesClass}><Gift />Unlimited Giveaways</li>
                    <li className={liStylesClass}><Bonuse />Adding Bonuses to Missions</li>
                    <li className={liStylesClass}><System />Reference System</li>
                    <li className={liStylesClass}><Shield />Captcha Verification</li>
                    <li className={liStylesClass}><Grows />Follow-up Verification</li>
                    <li className={liStylesClass}><Balance />Balance System</li>
                </ul>
            </div>
        </div>
    );
};

export default Banner;