class Equipment < ApplicationRecord
    has_many :equipment_slots, dependent: :destroy
    has_many :characters, through: :equipment_slots
    has_many :enemies, through: :equipment_slots
end
