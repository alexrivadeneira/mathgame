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
	var players = [];

	var playerOne = {};
	var playerTwo = {};

	var playerOneStats = [];
	var playerTwoStats = [];

	var playerOneContainer = {};
	var playerTwoContainer = {};

	var i = 0;

	ids.forEach(function(id){
		if (i == 0){
			playerOneStats.push(playerOne["id"] = {id: id});
			playerOneStats.push(playerOne["score"] = {score: 0});
			playerOneStats.push(playerOne["username"] = {username: Meteor.users.findOne({_id: id}).username});

			playerOneContainer["playerOne"] = playerOneStats;
			players.push(playerOneContainer);
			i++;
		} else if (i == 1){
			playerTwoStats.push(playerTwo["id"] = {id: id});
			playerTwoStats.push(playerTwo["score"] = {score: 0});
			playerTwoStats.push(playerTwo["username"] = {username: Meteor.users.findOne({_id: id}).username});

			playerTwoContainer["playerTwo"] = playerTwoStats;
			players.push(playerTwoContainer);
			i++;
		}
	});

/*
	players.push(playerOne)

	var playerNames = ["playerOne", "playerTwo"];

	var i = 0;

	playerNames.forEach(function (playerName){
		players.push({name: })
		i++;
	});
*/
/*
	ids.forEach(function (id){
		players[playerNames[i]] = {
			id: id,
			score: 0,
			username: Meteor.users.findOne({_id: id}).username
		};
		i ++;
	});
*/

	return players;

	console.log(players);

}



/*
	return {
		players: playerIds,
		inProgress: true,
		questionsStore: [{question: "3+3", answer: 6, current: false}, {question: "3+3", answer: 6, current: false}]
	};
*/