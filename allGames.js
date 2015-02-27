GameFactory = {};


GameFactory.createGame = function(playerIds){

	var questions = [
					{q: "2+2",
					a: "4",
					answered: true},

					{q: "1+2",
					a: "3",
					answered: false},

					{q: "4+4",
					a: "8",
					answered: false},

					{q: "5+2",
					a: "7",
					answered: false},

					{q: "6+0",
					a: "6",
					answered: false},

					{q: "4+5",
					a: "9",
					answered: false},

					{q: "3+7",
					a: "10",
					answered: false},

					{q: "1+8",
					a: "9",
					answered: false},

					{q: "7+2",
					a: "9",
					answered: false},

					{q: "6+8",
					a: "14",
					answered: false},

					{q: "3+3",
					a: "6",
					answered: false},

					{q: "5+3",
					a: "8",
					answered: false},

					{q: "7+7",
					a: "14",
					answered: false}];

	var players = createPlayers(playerIds);
	console.log(players);

	return {
		questionsStore: questions,
		playerOne: players[0],
		playerTwo: players[1],
		inProgress: false,
		inProgressCount: "Click to Start",
		inProgressMarker: "X"
	};

};


function createPlayers(ids){
	var players = [];

	var playerOne = {};
	var playerTwo = {};

	var playerOneStats = [];
	var playerTwoStats = [];


	var i = 0;

	ids.forEach(function(id){
		if (i == 0){
			playerOneStats.push(playerOne["id"] = {id: id});
			playerOneStats.push(playerOne["score"] = {score: 0});
			playerOneStats.push(playerOne["username"] = {username: Meteor.users.findOne({_id: id}).username});
			players.push(playerOneStats);
			i++;
		} else if (i == 1){
			playerTwoStats.push(playerTwo["id"] = {id: id});
			playerTwoStats.push(playerTwo["score"] = {score: 0});
			playerTwoStats.push(playerTwo["username"] = {username: Meteor.users.findOne({_id: id}).username});
			players.push(playerTwoStats);
			i++;
		}
	});


	return players;

	console.log(players);

}

