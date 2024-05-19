import axios from 'axios';

export const getHistories = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_GET_CONVERSATION_HISTORY}`
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  } catch (error) {
    throw error;
  }
};

export const getConversation = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_GET_CONVERSATION}/${id}`
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  } catch (error) {
    throw error;
  }
};

export const sendMessage = async (id, message) => {
  try {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_SEND_MESSAGE}/${id}`,
      data: {
        message,
      },
    });
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  } catch (error) {
    throw error;
  }
};

export const getNewConversation = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_NEW_CONVERSATION}`
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  } catch (error) {
    throw error;
  }
};