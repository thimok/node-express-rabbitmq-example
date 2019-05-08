const amqpManager = require('../amqp.manager');
let queue;

module.exports.init = function(queueName) {
	amqpManager.connect()
		.then((channel) => {
			queue = queueName;
			amqpManager.consumeFromQueue(channel, queueName, messageReceivedEvent);
		})
		.catch((error) => {
			console.log(error);
		});
};

function messageReceivedEvent(message) {
	console.log(' [x] Worker ' + queue + ' has received message: ' + message);
}