class Spell < ApplicationRecord
    has_many :spell_slots, dependent: :destroy
    has_many :characters, through: :spell_slots
    has_many :enemies, through: :spell_slots
end
