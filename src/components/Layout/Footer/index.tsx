import React from 'react';
import Icon from '@/components/Icon';
import Link from 'next/link';
import { Button } from '@mui/material';
import routes from '@/constant/routes';
const Footer = () => {
    const footerData =[
        {   
            id: 1,
            title: "Airdrop",
            items: [
                {
                    address:"Airdrop list",
                    url: routes.airdrop.base,
                },
                {
                    address:"Closed Airdrop",
                    url: routes.airdrop.base,
                },
                {
                    address:"Listing Policy",
                    url: routes.listingPolicy,
                },
            ]
        },
        {
            id: 2,
            title: "Utilities",
            items: [
                {
                    address:"Telegram Bot",
                    url: routes.telegramBot,
                },    
                {
                    address:"News",
                    url: routes.blog.base,
                },  
            ]
        },
    ]
    
    const socials = [
        {
            title: "twitter",
            size: 24,
            url: "#",
        },
        {
            title: "telegram",
            size: 24,
            url: "#",
        },
        {
            title: "discord",
            size: 24,
            url: "#",
        },
        {
            title: "youtube",
            size: 24,
            url: "#",
        },
    ];
    return (
        <footer className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>

            <div className='grid grid-cols-10 w-full gap-y-12'>
                <div className='col-span-12 md:col-span-3 '>
                    <img className='!w-30' src="/images/logo.svg" alt="logo-svg" />
                    <p className='my-5 font-medium text-slate-700'>
                        Be the first
                        to hear about pre-sales and unexplored projects.
                    </p>
                    <div className='flex gap-3 mt-3'>
                        {socials.map((x, index) => (
                            <div key={index}>
                                <Link
                                    href={x.url} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >     
                                        <Icon name={x.title} size={x.size} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex justify-between col-span-12 md:col-span-4 pr-0 md:pr-20'>
                    {footerData.map((nav) => (
                            <div key={nav.id}>
                                <p className='text-primary-400 font-semibold text-lg mb-3'>{nav.title}</p>
                                <ul>
                                    {nav.items.map((item) => (
                                        <li key={item.address} className='text-sm my-2 text-slate-600'><Link href={item.url}>{item.address}</Link><span></span></li>  
                                    ))}
                                </ul>
                            </div>
                        ))
                    }    
                </div>

                <div className='col-span-12 md:col-span-3 p-10 flex justify-center items-center flex-col h-fit bg-primary-400 rounded-2xl'>
                    <h4 className='text-white mb-1 font-medium text-lg'>JOIN FOR THE NEWSLETTER</h4>
                    <p className='text-sm text-white font-medium mb-3'>Be the first to know about airdrops.</p>
                    <Link href="#">
                        <Button sx={{bgcolor: '#FFF', color: 'prmary.main', gap: 1, borderRadius: 2.4, px: 3, svg: {width: '20px', height: '20px '}, ":hover": {bgcolor: '#FFF', color: 'prmary.main'}}} startIcon={<Icon name="telegram-green" />}>
                            JOIN TELEGRAM
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='py-4 mt-6 border-t '>
                <p className='text-xs font-medium text-center md:text-left'>©2022 - 2023  Copyright by Airdropp™ - All rights reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;