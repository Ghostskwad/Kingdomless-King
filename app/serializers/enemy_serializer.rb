class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :level, :health

  has_many :spells

end
