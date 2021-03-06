class Course < ApplicationRecord
    validates :name, presence: true, length: {minimum:3, maximum:50}
    validates :shor_name, presence: true, length: {minimum:3, maximum:50}
    validates :description, presence: true, length: {minimum:3, maximum:300}
end