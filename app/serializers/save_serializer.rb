class SaveSerializer < ActiveModel::Serializer
  attributes :id, :session
  
  has_one :character, serializer: CharacterSaveSerializer
  
  def name

  end
end
