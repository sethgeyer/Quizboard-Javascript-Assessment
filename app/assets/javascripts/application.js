//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

  var questionGETPromise = $.getJSON('/quizzes/1/questions/1')

  var addToTheShowPage = function(returnedQuestion) {
    $(".question").html(returnedQuestion['description'])
    $(".question").attr('data-question-id', returnedQuestion['id'])

    $("#answer1").html(returnedQuestion['possible_answers'][0]["description"])
    $("#answer1").attr('data-answer-id', returnedQuestion['possible_answers'][0]["id"])

    $("#answer2").html(returnedQuestion['possible_answers'][1]["description"])
    $("#answer2").attr('data-answer-id', returnedQuestion['possible_answers'][1]["id"])

    $("#answer3").html(returnedQuestion['possible_answers'][2]["description"])
    $("#answer3").attr('data-answer-id', returnedQuestion['possible_answers'][2]["id"])

    $("#answer4").html(returnedQuestion['possible_answers'][3]["description"])
    $("#answer4").attr('data-answer-id', returnedQuestion['possible_answers'][3]["id"])

    $(".question").html(returnedQuestion['description'])

    var answers = $(returnedQuestion.possible_answers)

//    answers.each( function() {
//
//      var answer = $(this)
//
//      if (answer.attr("correct") == true) {
//        var correctAnswer = answer.attr("id")
//      }
//})
  }


  questionGETPromise.success(addToTheShowPage)



//  $(".btn").on('click', function() {
//    var clickedButton = $(this)
//    var answerID = clickedButton.attr('data-answer-id')
//
//    var correctAnswerGETPromise = $.getJSON('/quizzes/1/questions/1')
//
//    var identifyAnswer = function(returnedQuestion) {
//      var possibleAnswers = $(returnedQuestion.possible_answers)
//    }
//
//    questionGETPromise.success(identifyAnswer)
//  })










})