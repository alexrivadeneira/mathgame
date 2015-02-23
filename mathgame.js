questionsList = new Mongo.Collection("questions");

// clears the collection (otherwise would accumulate on every load)
// adds some questions
questionsList.insert({question: "3+3", answer: 6, current: false});
questionsList.insert({question: "1+2", answer: 3, current: false});



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('score', 0);

/* Score Template */

  Template.score.helpers({
    score: function () {
      var score = Session.get("score");
      return score;
    }
  });


/* Question Template */

  Template.questionArea.helpers({
    showQuestions: function () {
      return questionsList.find({});
    }

  });


  Template.questionArea.events({
    "submit form": function (event) {
      event.preventDefault();
      var submittedAnswer = event.target.answer.value;

      // get the id of the li, via the classname
      var questionId = this._id;

      var answer = questionsList.findOne(questionId).answer;

      var score = Session.get("score");

      if (answer == submittedAnswer){
        console.log("correct");
        Session.set("score", score+1);

      } else {
        Session.set("score", score-1);
      }
    }
  });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
