class CharactersController < ApplicationController
    before_action :set_character, only: %i[show show_modifiers]
    
    # def index
    #     @user = User.find_by(id: session[:user_id])
    #     if @user
    #         @characters = @user.characters.all
    #         render json: @characters, status: :ok
    #     end
    # end

    def show
        render json: @character
    end

    def show_modifiers
        render json: @character, serializer: ModifierSerializer, status: :ok
    end

    # def create
    #     @character = Character.create!(character_params)
    #         EquipmentSlot.create(
    #             equipment_id: 1, 
    #             wearer_type: "Character", 
    #             wearer_id: @character.id)
    #         EquipmentSlot.create(
    #             equipment_id: 2, 
    #             wearer_type: "Character", 
    #             wearer_id: @character.id)
    #         EquipmentSlot.create(
    #             equipment_id: 3, 
    #             wearer_type: "Character", 
    #             wearer_id: @character.id)
    #         EquipmentSlot.create(
    #             equipment_id: 3, 
    #             wearer_type: "Character", 
    #             wearer_id: @character.id)
    #         EquipmentSlot.create(
    #             equipment_id: 4, 
    #             wearer_type: "Character", 
    #             wearer_id: @character.id)
    #         EquipmentSlot.create(
    #             equipment_id: 5, 
    #             wearer_type: "Character", 
    #             wearer_id: @character.id)
    #         SpellSlot.create(
    #             spell_id: 1, 
    #             caster_type: "Character", 
    #             caster_id: @character.id)
    #         SpellSlot.create(
    #             spell_id: 2, 
    #             caster_type: "Character", 
    #             caster_id: @character.id)
    #         SpellSlot.create(
    #             spell_id: 3, 
    #             caster_type: "Character", 
    #             caster_id: @character.id)
    #         SpellSlot.create(
    #             spell_id: 4, 
    #             caster_type: "Character", 
    #             caster_id: @character.id)
    #         SpellSlot.create(
    #             spell_id: 5, 
    #             caster_type: "Character", 
    #             caster_id: @character.id)
    #     sibling = Character.create!(
    #         name: "Decker", 
    #         pronoun: "he", 
    #         level: 72, 
    #         klass: "Paladin", 
    #         health: 8980, 
    #         constitution: 85, 
    #         strength: 83, 
    #         dexterity: 58, 
    #         intelligence: 48, 
    #         player_id: @character.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 6, 
    #             wearer_type: "Character", 
    #             wearer_id: sibling.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 7, 
    #             wearer_type: "Character", 
    #             wearer_id: sibling.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 8, 
    #             wearer_type: "Character", 
    #             wearer_id: sibling.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 9, 
    #             wearer_type: "Character", 
    #             wearer_id: sibling.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 10, 
    #             wearer_type: "Character", 
    #             wearer_id: sibling.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 11, 
    #             wearer_type: "Character", 
    #             wearer_id: sibling.id)
    #         SpellSlot.create!(
    #             spell_id: 6, 
    #             caster_type: "Character", 
    #             caster_id: sibling.id)
    #     first_boss = Enemy.create(
    #         name: "The Rank", 
    #         level: 93, 
    #         health: 16000, 
    #         constitution: 400, 
    #         strength: 136, 
    #         dexterity: 97, 
    #         intelligence: 3)
    #     second_boss = Enemy.create(
    #         name: "The Old One", 
    #         level: ??, 
    #         health: 27000, 
    #         constitution: 358, 
    #         strength: 113, 
    #         dexterity: 99, 
    #         intelligence: 113)
    #         EquipmentSlot.create!(
    #             equipment_id: 12, 
    #             wearer_type: "Enemy", 
    #             wearer_id: second_boss.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 13, 
    #             wearer_type: "Enemy", 
    #             wearer_id: second_boss.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 14, 
    #             wearer_type: "Enemy", 
    #             wearer_id: second_boss.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 15, 
    #             wearer_type: "Enemy", 
    #             wearer_id: second_boss.id)
    #         EquipmentSlot.create!(
    #             equipment_id: 16, 
    #             wearer_type: "Enemy", 
    #             wearer_id: second_boss.id)
    #         SpellSlot.create!(
    #             spell_id: 7, 
    #             caster_type: "Enemy", 
    #             caster_id: second_boss.id)
    #         SpellSlot.create!(
    #             spell_id: 8, 
    #             caster_type: "Enemy", 
    #             caster_id: second_boss.id)
    #     Save.create(
    #         user_id: params[:user_id], 
    #         character_id: @character.id, 
    #         boss1_type: "Enemy", 
    #         boss1_id: first_boss.id, 
    #         boss2_type: "Enemy", 
    #         boss2_id: second_boss.id)
    #     render json: @character, status: :created
    # end

    # def destroy
    #     @character.destroy!
    #     head :no_content
    # end

    private 

    def set_character
        @character = Character.find(params[:id])
    end

    def character_params
        params.permit(:name, :pronoun)
    end
end
