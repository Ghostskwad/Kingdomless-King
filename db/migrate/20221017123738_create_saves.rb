class CreateSaves < ActiveRecord::Migration[7.0]
  def change
    create_table :saves do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :character, null: false, foreign_key: true
      t.references :boss1, polymorphic: true, index: true
      t.references :boss2, polymorphic: true, index: true
      t.integer :session, default: 1

      t.timestamps
    end
  end
end
