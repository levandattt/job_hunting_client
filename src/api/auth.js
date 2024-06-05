import axios from "axios";

export const login = async(account) => {
    try {
        const response = await axios({
            method: "post",
            url: `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_LOGIN}`,
            data: {
                username: account.account,
                password: account.password,
            },
        });
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(response);
            }, 2000);
        });
    } catch (error) {
        return error;
    }
};