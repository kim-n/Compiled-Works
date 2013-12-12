class Friendship < ActiveRecord::Base
  attr_accessible :out_friend_id, :in_friend_id

  validates :out_friend_id, :in_friend_id, presence: true

  belongs_to(
  :added_friend,
  class_name: "User",
  foreign_key: :out_friend_id,
  primary_key: :id
  )

  belongs_to(
  :owner,
  class_name: "User",
  foreign_key: :in_friend_id,
  primary_key: :id
  )

  def self.can_friend?( current_user, other_user )
    (current_user.id != other_user.id ) && !(Friendship.exists?(:out_friend_id => other_user.id, :in_friend_id => current_user.id))
  end

  def self.can_unfriend?( current_user, other_user )
    Friendship.exists?(:out_friend_id => other_user.id, :in_friend_id => current_user.id)
  end
end
