questionsList = new Mongo.Collection("questions");

// clears the collection (otherwise would accumulate on every load)
// adds some questions
questionsList.insert({question: "3+3", answer: 6});
questionsList.insert({question: "1+2", answer: 3});



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('score', 0);

  Template.score.helpers({
    score: function () {
      var score = Session.get("score");
      return score;
    }
  });

  Template.questionArea.helpers({
    showQuestions: function () {
      return questionsList.find({});
    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
