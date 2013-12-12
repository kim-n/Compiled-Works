class CreateSecrets < ActiveRecord::Migration
  def change
    create_table :secrets do |t|
      t.integer :recipient_id
      t.integer :sender_id
      t.string :body
      t.timestamps
    end
  end
end
