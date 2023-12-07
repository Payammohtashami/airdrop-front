import store from '@/app/store';
import axios from '@/lib/http';
import Layout from '@/components/Layout';
import setupAxios from '@/lib/axiosConfig';
import ThemeRegistery from '@/theme/ThemeRegistery';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import '@/styles/index.css';
import 'swiper/css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    setupAxios(store, axios);
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Provider store={store}>
                <ThemeRegistery>
                    <Layout {...{Component, pageProps}} />
                    <Toaster toastOptions={{position: 'top-center'}} />
                </ThemeRegistery>
            </Provider>
        </>
    )
};