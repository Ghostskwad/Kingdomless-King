class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name, null: false, default: "Blake"
      t.string :pronoun, null: false, default: "he"
      t.integer :level, default: 54
      t.string :klass, default: "Caster"
      t.integer :health, default: 2745
      t.integer :constitution, default: 47
      t.integer :strength, default: 27
      t.integer :dexterity, default: 78
      t.integer :intelligence, default: 150
      t.references :player, foreign_key: { to_table: :characters }

      t.timestamps
    end
  end
end
