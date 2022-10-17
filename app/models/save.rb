class Save < ApplicationRecord
  belongs_to :user
  belongs_to :character, dependent: :destroy
  belongs_to :boss1, polymorphic: true, dependent: :destroy
  belongs_to :boss2, polymorphic: true, dependent: :destroy
end
