import axios from 'axios';
import { URL } from '../../data/constants';

export const serverAxiosInstance = axios.create({
    baseURL: URL.local,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
});

serverAxiosInstance.interceptors.response.use(
    (response) => {
        console.log(`🚀 JSON DB Response: ${response.status} ${response.statusText}`);
        return response;
    },
);

serverAxiosInstance.interceptors.request.use(
    (config) => {
        console.log(`🚀 JSON DB Response: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
);

export default serverAxiosInstance;
