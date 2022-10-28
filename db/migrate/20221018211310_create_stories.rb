class CreateStories < ActiveRecord::Migration[7.0]
  def change
    create_table :stories do |t|
      t.text :paragraph
      # t.belongs_to :scene, null: false, foreign_key: true

      t.timestamps
    end
  end
end
