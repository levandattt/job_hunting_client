import axios from 'axios';

export const fetchCreateCategory = async(data) => {
    try {
        const url = `http://127.0.0.1:6970/api/v1/categories`;
        const result = await axios({
            method: 'post',
            url: url,
            data: data
        });
        return result;
    } catch (error) {
        return error.response;
    }
};

export const fetchFindCategoryByTitle = async(title) => {
    try {
        const url = `http://127.0.0.1:6970/api/v1/categories/category?title=${title}`;
        const result = await axios({
            method: 'get',
            url: url,
        });
        return result;
    } catch (error) {
        return error.response
    }
}

export const fetchFindCategoryBySlug = async(slug) => {
    try {
        const url = `http://127.0.0.1:6970/api/v1/categories/category?slug=${slug}`;
        const result = await axios({
            method: 'get',
            url: url,
        });
        return result;
    } catch (error) {
        return error.response
    }
}