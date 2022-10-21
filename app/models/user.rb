class User < ApplicationRecord
    has_many :states, dependent: :destroy
    has_many :characters, through: :states
    has_many :enemies, through: :states

    has_secure_password

    validates :username, uniqueness: true
end
