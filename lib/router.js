Router.configure({
	layoutTemplate: "layout"

});

Router.map(function(){
	this.route("home", { path: "/" });
	this.route("play", { path: "/game/:_id",
		data: function(){

			var game = Games.findOne(this.params._id)


			// var currentPlayer = Meteor.users.find({_id: game.players[0]});
			// game.currentPlayer = game.players[Meteor.userId()];

			var gameId = game.id;

			var players = game.players;

			var questionsStore = game.questionsStore;
			
			var inProgress = game.inProgress;


			return game;
		}


	});
	
});