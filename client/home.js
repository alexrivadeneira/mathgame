Template.userList.helpers({
	users: function(){

		var currentUserId = Meteor.userId();

		return Meteor.users.find({_id: {$not: currentUserId}});
	}
	
});