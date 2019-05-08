const express = require('express');
const router = express.Router();
const amqpManager = require('../../events/amqp.manager');

router.get('/', (req, res) => {
	amqpManager.connect()
		.then((channel) => {
			amqpManager.sendMessageToQueue(channel, 'helloqueue', 'Hello from RabbitMQ!');
			res.status(200).json({status: 'okay'});
		})
		.catch((error) => {
			res.status(400).json({error: error});
		});
});

router.get('/bye', (req, res) => {
	amqpManager.connect()
		.then((channel) => {
			amqpManager.sendMessageToQueue(channel, 'byequeue', 'Bye from RabbitMQ!');
			res.status(200).json({status: 'okay'});
		})
		.catch((error) => {
			res.status(400).json({error: error});
		});
});

module.exports = router;