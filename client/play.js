Template.statusTemplate.helpers({
	games: function(){
		return Games.find({inProgress: true});
	}
});
