Games = new Meteor.Collection("games")

/*

Game object:

game = {
	inProgress: true/false,
	players: [],
	questionsStore: []
}
*/

// since we got rid of autopublish, we need to publish to  the server

if (Meteor.isServer){
	// publish games that contain the logged in user
	// When we do Games.find, will be limited from here
	Meteor.publish("games", function(){
		return Games.find();
		/*
		var currentUserId = Meteor.userId();
		return Games.find({players: currentUserId});
		*/
	});

	Meteor.publish("users", function(){
		return Meteor.users.find();
	});


}

if (Meteor.isClient){
	Meteor.subscribe("games");
	Meteor.subscribe("users");
}


Meteor.methods({
	createGame: function(otherPlayerId){
		var game = GameFactory.createGame([Meteor.userId(), otherPlayerId]);
		Games.insert(game);

	},

	scorePoint: function(gameId, playerId){
		var game = Games.findOne(gameId);

		if (playerId == game.playerOne[0].id){
			game.playerOne[1].score += 1;
			Games.update(gameId, game);
		} else {
			game.playerTwo[1].score += 1;
			Games.update(gameId, game);	
		}
	},

	markAnswered: function(gameId, questionMarked){
		var game = Games.findOne(gameId);

		var i = 0;

		console.log(game.questionsStore.length);
	
		while (i < game.questionsStore.length && game.questionsStore[i].q != questionMarked){
			i++;
		}
		
		game.questionsStore[i].answered = true;

		Games.update(gameId, game);	
	},


	
	markInProgress: function(gameId, userId){
		var game = Games.findOne(gameId);
		console.log(game.inProgressCount);

		if (game.inProgressCount == 0){
			game.inProgressCount = userId;
			Games.update(gameId, game);
		} else {
			game.inProgress = true;
			Games.update(gameId, game);
		}
	}


});


// Meteor.call("scorePoint", template.data._id, Meteor.userId());

