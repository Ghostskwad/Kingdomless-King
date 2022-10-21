class ModifierSerializer < ActiveModel::Serializer
  attributes :id, :spell_damage_bonus, :attack_damage, :defense, :speed

  def spell_damage_bonus
    self.object.spell_damage_modifier
  end

  def attack_damage
    self.object.total_attack_damage
  end

  def defense 
    self.object.total_defense
  end

  def speed
    self.object.dexterity/rand(1..3)
  end
  
end
