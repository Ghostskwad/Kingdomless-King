class User < ApplicationRecord
    has_many :saves, dependent: :destroy
    has_many :characters, through: :saves
    has_many :enemies, through: :saves

    has_secure_password

    validates :username, uniqueness: true
end
