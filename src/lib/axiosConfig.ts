import nookie from 'nookies';
import { Axios } from "axios";
// import { logout } from "@/feature/auth/asyncActions";
import { getAccessToken } from '@/utils/cookies';

export default function setupAxios(store: any, axios: Axios) {
    const { dispatch } = store;
    axios.interceptors.request.use(
        (config) => {
            const state = store.getState();
            const accessToken = getAccessToken(config);
            if (accessToken) config.headers.authorization = `Bearer ${accessToken}`;
            return config;
        },
        (error) => {
            Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            const state = store.getState();
            // if (error?.response?.status === 401 && !!state.auth.user) dispatch(logout());
            return Promise.reject(error);
        }
    );
};