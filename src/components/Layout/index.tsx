import React, { useEffect } from 'react';
import NextNProgress from "nextjs-progressbar";
import Footer from './Footer';
import Header from './Header';
import Aos from 'aos';

type LayoutType = {
    Component: any,
    pageProps: any,
};

const Layout: React.FC<LayoutType> = ({Component, pageProps}) => {
    return (
        <div>
            <NextNProgress color="#84DCC6" options={{ easing: "ease",showSpinner: false}} />
            <div className='h-full min-h-screen'>
                <Header />
                <main className='min-h-screen'>
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;