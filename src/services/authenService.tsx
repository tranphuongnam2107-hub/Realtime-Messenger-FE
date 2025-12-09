import { data } from "react-router";
import { apiConfig } from "../utils/apiConfig";

export const authenService = {
    login: async (identifier: string, password: string) => {
        try {
            const response = await apiConfig.post("/authen/login", { identifier, password });
            const data = response.data;
             
            console.log(data)
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    logout: async () => {
        try {
            const accessToken =
                localStorage.getItem("accessToken") ||
                sessionStorage.getItem("accessToken");

            if (!accessToken) {
                console.warn("No access token found. Redirecting to home...");
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/home";
                return;
            }

            // Gọi API logout với header Authorization
            await apiConfig.post(
                "/authen/logout",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );

        } catch(error) {
            console.error("Logout failed:", error);
        } finally {
            localStorage.clear();
            window.location.href = "/home";
        }
    }
}