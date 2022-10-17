class EquipmentSlotsController < ApplicationController
    belongs_to :equipment
    belongs_to :wearer, polymorphic: true
end
