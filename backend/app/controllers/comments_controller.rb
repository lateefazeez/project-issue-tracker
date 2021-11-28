class CommentsController < ApplicationController

  def index #/get
    @comments = Comment.all
    render json:@comments
  end

  def show #comment/ticket_id/id
    @comment = Comment.where(tickets_id: params[:id])
    render json: @comment
  end

  def destroy
    @comments = Comment.find(params[:id])

    if @comments.destroy
      head :no_content
    else
      render json: {error: @comments.errors.messages}, status: 422
    end
  end

  def create
    @comments = Comment.new(comments_params)

    if @comments.save
      render json: @comments, status: :created
    else
      render json: {error: @comments.errors.messages}, status: 422
    end
  end
  
    private
  def comments_params
    params.require(:comment).permit(:users_id, :tickets_id, :message)
  end

end
