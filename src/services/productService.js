import axios from 'axios';

export const getProducts = async(searchValue) => {
    try {
        const queryParam = searchValue.map((item) => {
            return `${item.key}=${item.value}`;
        }).join('&');
        const url = `http://127.0.0.1:6970/api/v1/product?${queryParam}`;
        const result = await axios.get(url);
        return result;
    } catch (error) {
        return error.response;
    }
};