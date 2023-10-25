import React from "react";
import styles from "./AirdropList.module.sass";
import Card from "@/components/AirdropCard";
import Link from "next/link";

const AirdropList = () => {


    return (
        <div className='mb-16'>
            <h4 className="font-bold text-3xl">Airdrop List</h4>
            <div className='grid grid-cols-12 gap-4'>
                {AirdropsState?.slice(0,6)?.map((item) => (
                    <div key={item.id} className="col-span-12 md:col-span-4 xl:col-span-3">
                        <Card data={item} />
                    </div>
                ))}
            </div>
            <Link href="/airdrop" className="flex items-center justify-center">
                Show More
            </Link>
        </div>
    );
};

const AirdropsState = [
    {
        id: 1,
        image: '/images/airdrop-1.jpg'
    },
    {
        id: 2,
        image: '/images/airdrop-1.jpg'
    },
    {
        id: 3,
        image: '/images/airdrop-1.jpg'
    },
    {
        id: 4,
        image: '/images/airdrop-1.jpg'
    },
    {
        id: 5,
        image: '/images/airdrop-1.jpg'
    },
]

export default AirdropList;
