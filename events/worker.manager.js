const helloqueueWorker = require('./workers/worker');
const helloqueueWorkerCallback = require('./workers/helloqueue.worker');

const byequeueWorker = require('./workers/worker');
const byequeueWorkerCallback = require('./workers/byequeue.worker');

module.exports.init = () => {
	helloqueueWorkerCallback.init('helloqueue');
	byequeueWorkerCallback.init('byequeue');
	
	helloqueueWorker.init('helloqueue', helloqueueWorkerCallback.messageReceivedEvent);
	byequeueWorker.init('byequeue', byequeueWorkerCallback.messageReceivedEvent);
};