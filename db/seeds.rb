# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
5.times do 
    User.create(name: Faker::Name.unique.name, email: Faker::Internet.unique.email, login?: false)
end

post1 = Post.create(title: Faker::Quote.singular_siegler, description: Faker::Quote.most_interesting_man_in_the_world, user_id: 1, isFavorite: true)
post2 = Post.create(title: Faker::Quote.singular_siegler, description: Faker::Quote.matz, user_id: 2, isFavorite: false)
post3 = Post.create(title: Faker::Quote.singular_siegler, description: Faker::Quote.famous_last_words, user_id: 3, isFavorite: true)
post4 = Post.create(title: Faker::Quote.singular_siegler, description: Faker::Quote.robin, user_id: 4, isFavorite: true)
post5 = Post.create(title: Faker::Quote.singular_siegler, description: Faker::Quote.yoda, user_id: 5, isFavorite: false)
