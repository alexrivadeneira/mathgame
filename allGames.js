GameFactory = {};


// Game
/*


*/




GameFactory.createGame = function(playerIds){

	var questions = [
					{q: "2+2",
					a: "4"},

					{q: "1+2",
					a: "3"},

					{q: "7+7",
					a: "14"}];

	var players = createPlayers(playerIds);

	return {
		questionsStore: questions,
		players: players
	};

};


function createPlayers(ids){
	var players = {};

	ids.forEach(function (id){
		players[id] = {
			score: 0
		};
	});

	return players;

}



/*
	return {
		players: playerIds,
		inProgress: true,
		questionsStore: [{question: "3+3", answer: 6, current: false}, {question: "3+3", answer: 6, current: false}]
	};
*/