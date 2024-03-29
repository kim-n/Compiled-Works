class Secret < ActiveRecord::Base
  attr_accessible :recipient_id, :sender_id, :body

  belongs_to(
  :recipient,
  class_name: "User",
  foreign_key: :recipient_id,
  primary_key: :id
  )

  belongs_to(
  :sender,
  class_name: "User",
  foreign_key: :sender_id,
  primary_key: :id
  )

  has_many(
  :secret_taggings,
  class_name: "SecretTagging",
  foreign_key: :secret_id,
  primary_key: :id
  )

  has_many :tags, :through => :secret_taggings, source: :tag


end
