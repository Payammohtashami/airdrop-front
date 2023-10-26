import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Statistics from './Statistics';

const TelegramBots: React.FC = () => {
    return (
        <div>
            <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
                <Banner />
                <Statistics />
            </div>
            <Footer />
        </div>
    );
};

export default TelegramBots;