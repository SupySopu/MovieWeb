import axios from 'axios';
import { apiToken, URL } from '../../data/constants';

export const axiosInstance = axios.create({
    baseURL: URL.base,
    timeout: 10000, // 10 segundos de timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": `Bearer ${apiToken.bearer}`
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(`🚀 DummyJSON API Response: ${response.status} ${response.statusText}`);
        return response;
    },
);

axiosInstance.interceptors.request.use(
    (config) => {
        console.log(`🚀 DummyJSON API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
);

export default axiosInstance;
