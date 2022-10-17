class CreateEnemies < ActiveRecord::Migration[7.0]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :level
      t.integer :health
      t.integer :constitution
      t.integer :strength
      t.integer :dexterity
      t.integer :intelligence

      t.timestamps
    end
  end
end
