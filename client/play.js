

Template.statusTemplate.events({
	"submit form": function(event, template){
		event.preventDefault();

		var userAnswer = event.target.userAnswer.value;
		var realAnswer = event.target.realAnswer.value;

		var currentUser = Meteor.userId();



		if (userAnswer == realAnswer){
			console.log(template.data._id);

			// find the game


			// access the player
			// update the score
	
		} else {
			console.log("Wrong");
		}
	}
});
