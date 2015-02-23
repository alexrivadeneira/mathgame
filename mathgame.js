questionsList = new Mongo.Collection("questions");

// clears the collection (otherwise would accumulate on every load)
// adds some questions
questionsList.insert({question: "3+3", answer: 6, current: false});
questionsList.insert({question: "1+2", answer: 3, current: false});



if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('score', 0);
  Session.set("currentQuestion", 0);

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

      // gets the number of the question for the player
      questionNumber = Session.get("currentQuestion");
      return questionsList.find({}).fetch()[questionNumber];
    }

  });


  Template.questionArea.events({
    "submit form": function (event) {
      event.preventDefault();
     
      var questionId = event.target.questionId.value;

      var submittedAnswer = event.target.answer.value;
      console.log(submittedAnswer);

      var answer = questionsList.findOne(questionId).answer;

      var score = Session.get("score");

      if (answer == submittedAnswer){
        console.log("correct");
        Session.set("score", score + 1);

      } else {
        Session.set("score", score - 1);
      }

      // whatever the outcome, go to the next question:
      
      var currentQuestion = Session.get("currentQuestion");
      var nextQuestion = currentQuestion + 1;
      Session.set("currentQuestion", nextQuestion);


    }
  });



}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
