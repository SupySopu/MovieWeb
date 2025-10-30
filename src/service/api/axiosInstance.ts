import axios from 'axios';

const DUMMYJSON_BASE_URL = 'https://api.themoviedb.org/3';

export const axiosInstance = axios.create({
    baseURL: DUMMYJSON_BASE_URL,
    timeout: 10000, // 10 segundos de timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        "Authorization": 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NWEzMzUwNjFmOGFjNzc4ZWU5OGEzMzE0MjQ2MWM2NyIsIm5iZiI6MTc1NjQwODM5NC41Nywic3ViIjoiNjhiMGFhNGE0YTk3NzEwMTQzYThhYjVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-_FehivC_-Zy422TvB9qa3w1t3NE84TzsPbf9oOB8Rc'
    },
});

axiosInstance.interceptors.response.use(
    (response) => {
        console.log(`🚀 DummyJSON API Response: ${response.status} ${response.statusText}`);
        return response.data;
    },
);

axiosInstance.interceptors.request.use(
    (config) => {
        console.log(`🚀 DummyJSON API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
);

export default axiosInstance;
