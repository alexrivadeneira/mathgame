


Template.gamesList.helpers({
	games: function(){
		return Games.find({});
	}
});


Template.statusTemplate.events({
	"submit form": function(event, template){
		event.preventDefault();

		var userAnswer = event.target.userAnswer.value;
		var realAnswer = event.target.realAnswer.value;

		var question = event.target.question.value;


		var currentUser = Meteor.userId();

		if (userAnswer == realAnswer){
			//console.log(template.data._id);
			Meteor.call("scorePoint", template.data._id, Meteor.userId());
			Meteor.call("markAnswered", template.data._id, question);

			//something like this to update score:
	//    Meteor.call('takeTurn', gameId, id, cardToPlay);

			// find the game


			// access the player
			// update the score
	
		} else {
			console.log("Wrong");
		}
	}
});
