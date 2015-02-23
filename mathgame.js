questionsList = new Mongo.Collection("questions");

// clears the collection (otherwise would accumulate on every load)
questionsList.remove({});
// adds some questions
questionsList.insert({question: "3+3", answer: 6});
questionsList.insert({question: "1+2", answer: 3});
questionsList.insert({question: "6+7", answer: 13});
questionsList.insert({question: "0+4", answer: 4});
questionsList.insert({question: "5+6", answer: 11});
questionsList.insert({question: "9+6", answer: 15});
questionsList.insert({question: "1+8", answer: 9});



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('score', 0);

  Template.score.helpers({
    score: function () {
      var score = Session.get("score");
      return score;
    }
  });

  Template.questionarea.helpers({
    showQuestions: function () {
      return "3+3";
    }
  });


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
