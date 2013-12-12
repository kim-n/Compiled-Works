class FriendshipsController < ApplicationController

  def create
    sleep(1)
    @friendship = Friendship.new(in_friend_id: current_user.id, out_friend_id: params[:user_id])
    if @friendship.save
      render :json => @friendship
    else
      render :json => "Can not add friendship!"
    end
  end

  def destroy
    Friendship.find_by_in_friend_id_and_out_friend_id(current_user.id, params[:user_id]).destroy
    # respond_to do |format|
#       format.html { redirect_to users_url }
#       format.json { render :json => @something }
#     end
    render :json => {}, status: 200
    #head :ok
  end

end
