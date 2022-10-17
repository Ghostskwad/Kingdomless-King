class SpellSlotSerializer < ActiveModel::Serializer
  attributes :id
  has_one :spell
  has_one :caster
end
