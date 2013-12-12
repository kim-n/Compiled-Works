class PostsController < ApplicationController


  def index
    @posts = Post.all
  end

  def create
    @post = Post.create(params[:post])
    render :json => @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update_attributes(params[:post])
    render :json => @post
  end

  def destroy
    Post.delete(params[:id])
    render json: {}
  end
end
