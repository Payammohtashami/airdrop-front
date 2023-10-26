import React from "react";
import Link from "next/link";
import AirdropCard from "@/components/AirdropCard";
import { Button } from "@mui/material";

const AirdropList = () => {


    return (
        <div className='mb-24 mt-24'>
            <div className="mb-16">
                <h4 className="font-bold text-3xl">Airdrop List</h4>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                {AirdropsState?.slice(0,6)?.map((item) => (
                    <div key={item.id} className="col-span-12 md:col-span-4 xl:col-span-3">
                        <AirdropCard data={item} />
                    </div>
                ))}
            </div>
            <Link href="/airdrop" className="flex items-center justify-center">
                <Button sx={{border: '1px solid', borderRadius: 2.4, px: 2, fontSize: 16}}>
                    Show More
                </Button>
            </Link>
        </div>
    );
};

const AirdropsState = [
    {
        id: 1,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 3000
    },
    {
        id: 2,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 850
    },
    {
        id: 3,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 1000
    },
    {
        id: 4,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 1100
    },
    {
        id: 5,
        image: '/images/airdrop-1.jpg',
        title: 'AICPrime',
        url: '#',
        status: 'Live',
        rewardPool: '950 BUSD',
        winner: '0.5',
        startAt: 900
    },
]

export default AirdropList;
