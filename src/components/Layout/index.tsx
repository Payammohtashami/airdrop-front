import React from 'react';
import NextNProgress from "nextjs-progressbar";

type LayoutType = {
    Component: any,
    pageProps: any,
};

const Layout: React.FC<LayoutType> = ({Component, pageProps}) => {
    return (
        <div>
            <NextNProgress color="#84DCC6" options={{ easing: "ease",showSpinner: false}} />
            <div className='h-full min-h-screen'>
                <main className='min-h-screen'>
                    <Component {...pageProps} />
                </main>
            </div>
        </div>
    );
};

export default Layout;