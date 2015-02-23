if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('score', 0);

  Template.score.helpers({
    score: function () {
      var score = Session.get("score");
      return score;
    }
  });

  Template.score.events({
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
