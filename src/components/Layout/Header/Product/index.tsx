import React, { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { Button } from "@mui/material";
import { Dashboard, Discord, Speaker, Telegram, Twitter, Youtube, GreenRocket, List, ListingPolicy, Airdrop, Close,  } from "@/components/Icon/Header";


const Product = () => {
    const productList: any[] = [
        {
            id: 1,
            icon: List,
            title: "Airdrop List",
            description: "List of latest and live airdrops",
            url: "/airdrop",
            isNew: false,
        },
        {
            id: 2,
            icon: Close,
            title: "Closed Airdrop",
            description: "List of all airdrops released so far",
            url: "/airdrop/closed",
            isNew: false,
        },
        {
            id: 3,
            icon: ListingPolicy,
            title: "Listing Policy",
            description: "Our policy when accepting airdrop projects",
            url: "/listing-policy",
            isNew: false,
        },
        {
            id: 4,
            icon: Airdrop,
            title: "Create Airdrop",
            description: "Start your own airdrop with the decentralized app",
            url: "#",
            isNew: true,
        },
    ];

    return (
        <div className='grid grid-cols-8 p-6 md:p-8'>

            <div className='border-r-[1px] border-slate-200 pr-4 col-span-2'>
                <div className='flex gap-3 items-center'>
                    <Dashboard size={28} />
                    <h3 className="font-black text-primary-400">AIRDROP</h3>
                </div>
                <ul className='mt-6 flex flex-col'>
                    {productList?.map((item,index) => (
                        <li key={index} className="rounded-lg transition-all duration-200 hover:bg-slate-100/70 p-4">
                            <Link href={item.url} className="flex gap-2 ">
                                <item.icon />
                                <div className="-mt-1">
                                    <p className='text-slate-900 font-bold'>{item.title}</p>
                                    <p className='text-xs text-slate-500 mt-1'>{item.description}</p>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='flex flex-col border-r-[1px] border-slate-200 justify-between col-span-3 px-6'>
                <div className=''>
                    <div className="flex items-center gap-3">
                        <Speaker />
                        <h3 className="font-black text-primary-400">Announcement</h3>
                    </div>
                    <p className="mt-6 text-slate-800 text-sm font-medium">
                        Meet our updated desing to deliver airdrops and giveaways in the fastest and easiest way, 
                        thanks to your feedback. Easily join the airdrop of your favorite projects and enjoy 
                        the new UI.
                    </p>
                </div>
                <div>
                    <div className='flex gap-3'>
                        <Link href="#">
                            <Telegram size={28} />
                        </Link>
                        <Link href="#">
                            <Discord size={28} />
                        </Link>
                        <Link href="#">
                            <Twitter size={28} />
                        </Link>
                        <Link href="#">
                            <Youtube size={28} />
                        </Link>
                    </div>
                    <div className="flex gap-4 mt-3 border-[1px] border-primary-400 w-fit px-6 py-3 rounded-xl">
                        <button className="text-primary-500">For Business</button>
                        <button className="flex items-center gap-2 text-primary-500">
                            <GreenRocket size={24} />
                            Support
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-l-6 col-span-3'>
                <div className="px-4 max-h-96 flex flex-col gap-2 overflow-y-auto">
                    <p className="font-medium text-slate-800">Latest News</p>
                    <img src={'/images/airdrop-1.jpg'} className="rounded-xl" alt="news" />
                    <div className="mt-2 flex flex-col gap-2">
                        <span className="text-primary-400 font-semibold">AICPrime</span>
                        <p className="text-sm">The parent community of AIRPrime, “AIRPrime Technologies” was founded in August 2017 as a Research and Development group with a particular focus on artificial intelligence technology.intelligence technology.</p>
                        <Button className=" !text-slate-500 !rounded-xl" endIcon={<Icon name='arrow-right' size={12} />}>Read more</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;
