class SecretsController < ApplicationController

  def new

  end

  def create
    @secret = Secret.new(params[:secret])
    @secret.sender_id = current_user.id
    if @secret.save
      render :json => @secret
    else
      render :json => "Can not save secret!"
    end
  end
end
