import React from 'react';
import Header from './components/header';
import Body from './components/body';
import { AirdropType, AirdropsStates } from '@/mock/airdrop';
import { useRouter } from 'next/router';

const AirdropDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const airdropsData = AirdropsStates.find((item) => item?.url === id) ?? null;
    console.log({airdropsData}, 'iidd');
    
    return (
        <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0 mb-24'>
            <Header data={airdropsData} />
            <Body data={airdropsData} />
        </div>
    );
};

export default AirdropDetails;