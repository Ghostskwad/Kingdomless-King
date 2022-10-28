class SceneSerializer < ActiveModel::Serializer
  attributes :id, :scene

  has_many :stories
end
