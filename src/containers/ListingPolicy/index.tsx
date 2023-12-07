import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

const ListingPolicy = () => {
    return (
        <div className='container px-4 mx-auto xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
            <Header />
            <Cards />
            <Footer />
        </div>
    );
};

export default ListingPolicy;