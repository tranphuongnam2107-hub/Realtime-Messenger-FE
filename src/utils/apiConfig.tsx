import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const apiConfig = axios.create({
    baseURL: BASE_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
    },
});

apiConfig.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem("accessToken") || sessionStorage.getItem("accessToken");
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiConfig.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        // Nếu token hết hạn và chưa retry
        if (error.response?.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) {
                // Không có refresh token → logout
                localStorage.clear();
                window.location.href = "/";
                return Promise.reject(error);
            }

            try {
                // Gọi API refresh token
                const res = await axios.post(`${BASE_URL}/authen/refresh-token`, { refreshToken });
                const { accessToken, refreshToken: newRefreshToken } = res.data.dataRes;

                // Lưu lại token mới
                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("refreshToken", newRefreshToken);

                // Gắn token mới vào header và retry request cũ
                originalRequest.headers.Authorization = `Bearer ${accessToken}`;
                return apiConfig(originalRequest);
            } catch (refreshError) {
                // Refresh token hết hạn → logout
                localStorage.clear();
                window.location.href = "/";
                return Promise.reject(refreshError);
            }
        }

        return Promise.reject(error);
    }
);

