import axios from "axios";

const ApiAxios = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.2.8:3000/'
        // baseURL: 'http://172.16.69.225:3000/'
    });

    // cấu hình gửi đi
    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await AsyncStorage.getItem('token');
            const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    // cấu hình nhận về
    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default ApiAxios;