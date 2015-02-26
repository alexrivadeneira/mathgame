Template.gamesList.helpers({
	games: function(){
		return Games.find({});
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


