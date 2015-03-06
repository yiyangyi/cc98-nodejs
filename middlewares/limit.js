var config = require('../config');

var PERMIT_POST_INTERVAL = config.permit_post_interval;
if (PERMIT_POST_INTERVAL < 0) PERMIT_POST_INTERVAL = 0; 
var DISABLE_POST_INTERVAL = PERMIT_POST_INTERVAL > 0 ? false : true;

/**	
 * limit the time interval the user can post to the forum
 */
exports.postInterval = function(req, res, next) {
	if (DISABLE_POST_INTERVAL) return next();
	if (isNaN(req.session.lastPostTimestamp)) {
		req.session.lastPostTimestamp = Date.now();
		return next();
	}
	if (Date.now() - req.session.lastPostTimestamp < PERMIT_POST_INTERVAL) {
		var ERR_MSG = "您的回复速度太快啦！";
		res.render("notify/notify", { err: ERR_MSG });
		return;
	}
	req.session.lastPostTimestamp = Date.now();
	next();
}