class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :value, :flavor_text
end
