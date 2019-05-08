const helloqueueWorker = require('./workers/helloqueue.worker');
const byequeueWorker = require('./workers/byequeue.worker');

module.exports.init = () => {
	helloqueueWorker.init('helloqueue');
	byequeueWorker.init('byequeue');
};