class CreateEquipmentSlots < ActiveRecord::Migration[7.0]
  def change
    create_table :equipment_slots do |t|
      t.belongs_to :equipment, null: false, foreign_key: true
      t.references :wearer, polymorphic: true, index: true

      t.timestamps
    end
  end
end
