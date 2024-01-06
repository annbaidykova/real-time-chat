require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
const CHAT_ENGINE_PRIVATE_KEY = process.env.CHAT_ENGINE_PRIVATE_KEY;

app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
	const { username } = req.body;
	try {
		const response = await axios.post(
			'https://api.chatengine.io/users/',
			{ username: username, secret: username, first_name: username },
			{ headers: { 'Private-Key': CHAT_ENGINE_PRIVATE_KEY } }
		);
		return res.status(response.status).json(response.data);
	} catch (error) {
		return res.status(error.response.status).json(error.response.data);
	}
});

const start = () => {
	try {
		app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
	} catch (error) {
		console.log(error);
	}
};

start();
