exports.index = function (req, res, next) {
	var q = req.query.q;
	q = encodeUIRComponent(q);
	res.redirect();
};