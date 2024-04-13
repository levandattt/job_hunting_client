import axios from 'axios';
import react from 'react';
export const register = async(formData) => {
    try {
        const url = `http://127.0.0.1:6970/api/v1/register`;
        console.log(formData);
        const result = await axios.post(url, formData);
        return result;
    } catch (error) {
        return error.response;
    }
};

export const login = async(formData) => {
    try {
        const url = `http://127.0.0.1:6970/api/v1/login`;
        const result = await axios.post(url, formData);
        return result;
    } catch (error) {
        return error.response;
    }
}

export const refreshToken = async() => {
    try {
        const url = `http://127.0.0.1:6970/api/v1/refresh-token`;
        const result = await axios.post(url);
        return result;
    } catch (error) {
        return error.response;
    }
}