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

		


	}

});


// Meteor.call("scorePoint", template.data._id, Meteor.userId());

