Template.gamesList.helpers({
	games: function(){
		return Games.find({inProgress: true});
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
		Meteor.call("createGame", template.data._id);
	
	}
});


