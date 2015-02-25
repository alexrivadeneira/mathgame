GameFactory = {};

GameFactory.createGame = function(playerIds){

	return {
		players: playerIds,
		inProgress: true,
		questionsStore: []
	};

}
