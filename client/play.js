

Template.individualQuestion.events({
	"submit form": function(event, template){
		event.preventDefault();

		var userAnswer = event.target.userAnswer.value;
		var realAnswer = event.target.realAnswer.value;

		var currentUser = Meteor.userId();

		var gameId = event.target.gameId.value;



		if (userAnswer == realAnswer){
			console.log(template._id);

			// find the game


			// access the player
			// update the score
	
		} else {
			console.log("Wrong");
		}
	}
});
