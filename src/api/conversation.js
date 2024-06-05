import axios from 'axios';

export const getHistories = async (userId = 1, limit) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_GET_CONVERSATION_HISTORY}?userId=${userId}`
    );
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  } catch (error) {
    console.log("Error fetching histories:", error);
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
    console.log("Error fetching conversation:", error);
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
    console.log("Error sending message:", error);
    throw error;
  }
};

export const getNewConversation = async (userId) => {
  try {
    if (userId === undefined) {
      userId = 1;
    }
    const response = await axios.post(
      `${process.env.REACT_APP_API_BASE}${process.env.REACT_APP_API_NEW_CONVERSATION}`,
      { userId }
    );

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  } catch (error) {
    console.log("Error fetching new conversation:", error);
    throw error;
  }
};