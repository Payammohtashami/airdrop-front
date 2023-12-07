import React, { useState } from 'react';
import AirdropCard from "@/components/AirdropCard";
import { AirdropType, AirdropsStates } from '@/mock/airdrop';

const AridropList = () => {
    const [activeTab, setActiveTab] = useState<string>("All");
    const navigation = [
        { title: "All", path: "/" },
        { title: "New", path: "/" },
        { title: "Ending Soon", path: "/" },
    ];

    return (
        <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0 mb-24'>
            <div>
                <ul className='flex items-center justify-center w-full my-12 pb-2 gap-8 border-b border-slate-300'>
                    {navigation.map((nav, index) => (
                        <li
                            key={`navigation-${index}`}
                            className={activeTab === nav?.title ? 'text-slate-700 transition-all cursor-pointer font-bold relative after:absolute after:-bottom-2.5 after:rounded-xl after:left-0 after:w-full after:h-1 after:bg-primary-400 after:z-10 after:content-[""]' : 'text-slate-700 cursor-pointer'}
                            onClick={() => setActiveTab(nav.title)}
                        >
                        <p>{nav.title}</p>
                    </li>))}
                </ul>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                {AirdropsStates?.map((item: AirdropType) => (
                    <div key={item.id} className="col-span-12 md:col-span-4 xl:col-span-3">
                        <AirdropCard {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AridropList;