class StateSerializer < ActiveModel::Serializer
  attributes :id, :session
  has_one :user
  has_one :character
  has_one :boss1
  has_one :boss2
end
