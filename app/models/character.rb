class Character < ApplicationRecord
  has_many :saves, dependent: :destroy
  has_many :users, through: :saves
  has_many :siblings, class_name: "Character", foreign_key: :player_id, dependent: :destroy
  belongs_to :player, class_name: "Character", optional: true
  has_many :spell_slots, as: :caster, dependent: :destroy
  has_many :spells, through: :spell_slots
  has_many :equipment_slots, as: :wearer, dependent: :destroy
  has_many :equipments, through: :equipment_slots

  def spell_damage_modifier
    equipments.where(modifier_type: "intelligence").sum(:modifier_value) + intelligence * rand(1..4)
  end

  def total_attack_damage
    equipments.where(modifier_type: "strength").sum(:modifier_value) + strength * rand(5..10)
  end

  def total_defense
    equipments.where(modifier_type: "constitution").sum(:modifier_value) + constitution * rand(1..3)
  end

end
