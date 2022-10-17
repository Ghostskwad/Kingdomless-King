class SpellSlot < ApplicationRecord
  belongs_to :spell
  belongs_to :caster, polymorphic: true
end
