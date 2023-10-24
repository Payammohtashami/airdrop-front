import store from '@/app/store';
import axios from '@/lib/http';
import Layout from '@/components/Layout';
import setupAxios from '@/lib/axiosConfig';
import ThemeRegistery from '@/theme/ThemeRegistery';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import '@/styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
    setupAxios(store, axios);
    return (
        <Provider store={store}>
            <ThemeRegistery>
                <Layout {...{Component, pageProps}} />
                <Toaster toastOptions={{position: 'top-center'}} />
            </ThemeRegistery>
        </Provider>
    )
};