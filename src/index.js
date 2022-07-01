const express = require('express')
const sendMessage = require('./utils/sendMessage')

const app = express();
const port = process.env.PORT || 8080

app.use(express.json())

// retrieve reply from chatbot
app.post('/retrieveMessage', (req, res) => {
    console.log(req.body);
});

// send message to chatbot
app.post('/sendMessage', async (req, res) => {

    try {
        const sendToBot = await sendMessage(req.body);
        
        res.status(200).send(sendToBot);
    } catch (error) {
        res.status(500).send();
    }
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
});