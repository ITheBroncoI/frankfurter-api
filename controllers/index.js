const models = require("../database/models");

const createDivisa = async (req, res) => {
	try {
		const divisa = await models.Divisas.create(req.body);
		return res.status(201).json({
			divisa
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

const getAllDivisas = async (req, res) => {
	console.log('getting divisas');
	try {
		const divisas = await models.Divisas.findAll({
			include: [
			]
		});
		return res.status(200).json({ divisas });
	} catch (error) {
		return res.status(500).send(error.message);
	}
};

module.exports = {
	createDivisa,
	getAllDivisas
};
