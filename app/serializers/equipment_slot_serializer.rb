class EquipmentSlotSerializer < ActiveModel::Serializer
  attributes :id
  has_one :equipment
  has_one :wearer
end
