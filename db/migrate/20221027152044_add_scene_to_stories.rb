class AddSceneToStories < ActiveRecord::Migration[7.0]
  def change
    add_reference :stories, :scene, null: false, foreign_key: true
  end
end
