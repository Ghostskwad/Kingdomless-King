class CreateSpells < ActiveRecord::Migration[7.0]
  def change
    create_table :spells do |t|
      t.string :name
      t.integer :value
      t.text :flavor_text

      t.timestamps
    end
  end
end
