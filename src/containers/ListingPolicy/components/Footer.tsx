import routes from '@/constant/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='grid grid-cols-3 mb-24'>
            <div className='col-span-3 md:col-span-2'>
                <h3 className='text-3xl md:text-4xl lg:text-6xl text-primary-400 font-black'>Contact us and list </h3>
                <h5 className='text-2xl mb-8 md:text-3xl lg:text-4xl font-extrabold'>exclusive airdrops now!</h5>
                <Link 
                    href={routes.contact}
                    style={{
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1), inset 0px 7px 9px rgba(255, 255, 255, 0.43)'
                    }}
                    className='bg-primary-600 text-white p-5 font-medium text-xl rounded-2xl w-52'
                >
                    Contact Us
                </Link>
            </div>
            <div className='col-span-3 md:col-span-1 hidden md:block relative'>
                <Image 
                    src='/images/landing/airdrop.png' 
                    width={0} 
                    height={0} 
                    sizes='100vw' 
                    alt='airdrop' 
                    className='absolute w-[400px] -top-72'
                />
            </div>
        </div>
    );
};

export default Footer;