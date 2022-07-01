const axios = require('axios');

const sendMessage = async (data) => {
    const options = {
        method: 'post',
        url: 'https://kanal.kata.ai/receive_message/d8483f0b-7973-45a3-83f7-42b73b74c474',
        json: true,
        data: {
            "userId": data.userId,
            "messages": [{
                "type": data.messages[0].type,
                "content": data.messages[0].content
            }]
        }
    };

    try {
        const response = await axios.request(options);
        const data = {
            "status": response.status,
            "statusText": response.statusText
        };
        return data;
    } catch (error) {
        return error
    }
}

module.exports = sendMessage