import React from 'react';
import Hero from './Hero';
import AirdropList from './AirdropList';

const HomePage = () => {
    return (
        <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
            <Hero />
            <AirdropList />
        </div>
    );
};

export default HomePage;