Template.gamesList.helpers({
	games: function(){
		// limit this to only games where the user is involved

		var currentUserId = Meteor.userId();

		return Games.find({playerOne:});
	}
});

Template.userList.helpers({
	users: function(){

		// get the Id of the current user
		var currentUserId = Meteor.userId();


		// only return users other than the current user himself
		return Meteor.users.find({_id: {$not: currentUserId}});
	}
	
});

 

Template.userButton.events({
	"click button": function(event, template){
		//console.log(Games.findOne());

		// grabs the user id of the other player and sends it through
		Meteor.call("createGame", template.data._id);
	
	}
});


