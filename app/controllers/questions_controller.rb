class QuestionsController < ApplicationController

  def index
    @questions = Quiz.find(params[:quiz_id]).questions
    render json: @questions.to_json(include: :possible_answers)
  end

  def show
    @question = Question.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: @question.to_json(include: :possible_answers) }
    end

    # render json: @question.to_json(include: :possible_answers)

  end

end
