class Tweet < ApplicationRecord
    has_many :replies
    validates :author, presence: true
    validates :content, uniqueness: true
end