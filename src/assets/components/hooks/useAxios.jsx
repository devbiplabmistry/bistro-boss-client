import axios from "axios";
import { useContext, useEffect } from "react";
import { authContext } from "../../../providers/authProvider";

const useAxios = () => {
    // const {logout}=useContext(authContext)
    const instance = axios.create({
        baseURL: 'http://localhost:5000',  
        headers: {
            "Content-Type": "application/json"
        }
    });
    useEffect(() => {
        instance.interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token');
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response) {
                const status = error.response.status;
                if (error.response || status === 401 || status === 403) {
                    // logout()   
                }
            }
            return Promise.reject(error);
        });

    }, [instance]);

    return [instance];
};

export default useAxios;
