const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:nick', async (req, res) => {
	const headers = {
		Authorization: `Bearer ${process.env.FACEIT_API_KEY}`
	};
	try {
		const { nick } = req.params;
		// Get player id
		const searchResponse = await fetch(
			`${process.env.FACEIT_API_URL}search/players?nickname=${nick}&game=csgo&offset=0&limit=1`,
			{
				headers
			}
		);
		const searchData = await searchResponse.json();
		if (searchData.items.length > 0) {
			const { player_id, nickname, avatar } = searchData.items[0];

			// Get profile info
			const infoResponse = await fetch(`${process.env.FACEIT_API_URL}players/${player_id}`, {
				headers
			});
			const infoData = await infoResponse.json();
			const { faceit_elo, skill_level } = infoData.games.csgo;
			const { steam_id_64 } = infoData;

			// Get profile stats
			const statsResponse = await fetch(`${process.env.FACEIT_API_URL}players/${player_id}/stats/csgo`, {
				headers
			});
			const statsData = await statsResponse.json();
			const { lifetime } = statsData;

			// Get 20 last matches
			const matchesResponse = await fetch(`${process.env.FACEIT_API_MATCH_URL}${player_id}/games/csgo?size=20`);
			const matchesData = await matchesResponse.json();
			const lastMatches = matchesData.map((match) => {
				return {
					matchId: match._id.matchId,
					date: match.date,
					map: match.i1,
					team: match.i5,
					score: match.i18,
					result: parseInt(match.i10) ? 'Win' : 'Loss',
					kills: match.i6,
					assists: match.i7,
					deaths: match.i8,
					kdRatio: match.c2,
					elo: match.elo
				};
			});

			res.json({
				player_id,
				nickname,
				skill_level,
				faceit_elo,
				avatar,
				steam_id_64,
				stats: lifetime,
				lastMatches
			});
		} else {
			res.status(404).json({
				error: 'Gracz o takim nicku nie istnieje.'
			});
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({
			error: 'Błąd serwera. Spróbuj ponownie później.'
		});
	}
});

module.exports = router;
