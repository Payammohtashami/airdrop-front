import { listingPolicyItems } from '@/mock/listingPolicy';
import React from 'react';

const Cards = () => {
    return (
        <div className='grid grid-cols-1 mt-8 md:grid-cols-3 xl:grid-cols-4 gap-3 mb-32 justify-between'>
            {listingPolicyItems?.map((items) => (
                <div key={items?.id} className='bg-white rounded-xl p-8 w-full h-64 shadow'>
                    <div style={{background: items.theme}} className='flex items-center justify-center rounded-lg p-3 mb-3 w-14 h-14'>
                        <items.icon />
                    </div>
                    <div>
                        <h4 className='text-slate-800 mb-3'>{items.title}</h4>
                        <p>{items.detail}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;