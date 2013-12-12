class Tag < ActiveRecord::Base
  attr_accessible :body

  has_many(
  :secret_taggings,
  class_name: "SecretTagging",
  foreign_key: :tag_id,
  primary_key: :id
  )

  has_many :secrets, :through => :secret_tagging, source: :secret

end
