class CommentsController < ApplicationController

  def index #/get
    @comments = Comment.all
    render json:@comments
  end

  def show #comment/ticket_id/id
    @comment = Comment.where(tickets_id: params[:id])
    render json: @comment
  end

end
