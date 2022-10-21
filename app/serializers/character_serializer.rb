class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :pronoun, :level, :klass, :health
  
  has_many :spells
  has_many :siblings

end


