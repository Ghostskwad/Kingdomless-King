class CreateSpellSlots < ActiveRecord::Migration[7.0]
  def change
    create_table :spell_slots do |t|
      t.belongs_to :spell, null: false, foreign_key: true
      t.references :caster, polymorphic: true, index: true

      t.timestamps
    end
  end
end
