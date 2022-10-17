class Enemy < ApplicationRecord
  has_many :saves, as: :boss1
  has_many :saves, as: :boss2
  has_many :users, through: :saves
  has_many :spell_slots, as: :caster, dependent: :destroy
  has_many :spells, through: :spell_slots
  has_many :equipment_slots, as: :wearer, dependent: :destroy
  has_many :equipments, through: :equipment_slots

  def spell_damage_modifier
      if self.name == "The Old One"
      equipments.where(modifier_type: "strength").sum(:modifier_value) + intelligence/2 + strength/2 * rand(1..4)
      end
    end
    
    def total_attack_damage
      equipments.where(modifier_type: "strength").sum(:modifier_value) + strength * rand(5..10)
    end
    
    def total_defense
      equipments.where(modifier_type: "constitution").sum(:modifier_value) + constitution * rand(1..3)
    end
end
