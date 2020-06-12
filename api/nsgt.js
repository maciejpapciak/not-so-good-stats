const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:id', async (req, res) => {
	const headers = {
		Authorization: `Bearer ${process.env.FACEIT_API_KEY}`
	};

	const nsgtIds = [
		'dc483a07-2ba9-4147-9b6a-170739046213',
		'8f36179c-202b-4ac5-8cad-311f9451189b',
		'b4cbee31-96d9-4458-8b9a-d5b8e763a1af',
		'fa1b4775-c887-4af1-bd67-72c0e2b98a17',
		'9d09c1f6-f132-4476-9a40-fa2b90d7a49a',
		'a1dd5d16-f1b2-4608-9dbb-a4e1eea2dd6b'
	];

	try {
		const { id } = req.params;
		// Get profile info
		const infoResponse = await fetch(`${process.env.FACEIT_API_URL}players/${id}`, {
			headers
		});
		const infoData = await infoResponse.json();
		const { skill_level } = infoData.games.csgo;
		const { avatar, nickname } = infoData;

		// Get profile stats
		const statsResponse = await fetch(`${process.env.FACEIT_API_URL}players/${id}/stats/csgo`, {
			headers
		});
		const statsData = await statsResponse.json();
		const recentResults = statsData.lifetime['Recent Results'];

		const result = {
			nickname,
			avatar,
			skill_level,
			recentResults
		};

		res.json(result);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "Server error. Could not retrieve players' info."
		});
	}
});

module.exports = router;
