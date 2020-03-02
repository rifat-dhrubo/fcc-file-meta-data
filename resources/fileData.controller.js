const { theSureThing } = require('../utils/helpers');

const getFileData = (req, res) => {
	const { originalname, mimetype, size } = req.file;

	res.json({
		name: originalname,
		type: mimetype,
		size,
	});
};

module.exports = { getFileData };
