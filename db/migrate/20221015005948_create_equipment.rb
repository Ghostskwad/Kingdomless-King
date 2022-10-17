class CreateEquipment < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment do |t|
      t.string :name
      t.string :slot
      t.string :modifier_type
      t.integer :modifier_value
      t.text :flavor_text

      t.timestamps
    end
  end
end
