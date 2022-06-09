# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all
t1 = Todo.create({ title: "todo 1", body: "hello", done: false })
t2 = Todo.create({ title: "todo 2", body: "hellol hello", done: false })
t3 = Todo.create({ title: "todo 3", body: "hello hello hello", done: false })
