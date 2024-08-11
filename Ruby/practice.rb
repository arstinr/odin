# ##Practice file

# # Addition
# puts 1 + 1

# # Subtraction
# puts 2 - 1

# # Multiplication
# puts 10 * 0.1

# # Division
# puts 10 / 10

# # Exponents
# puts 2 ** 2
# puts 3 ** 4

# # Modulus (find remainder of division)
# puts 8 % 2 
# puts 10 % 4

# # integers are whole numbers
# # floats are numbers with decimal point

# # converting number types
# # to float
#   # .to_f
# # to int
#   # .to_i

# # Other methods
# # .even?
# # .odd?

# # String concatenations

# puts "Hello " + "World!"
# puts "Helow " << "World!"

# puts "Hellowww ".concat("World!")

# #Substrings (access strings inside strings)
# puts "hello"[0]
# puts "hello"[0..1]
# puts "hello"[0, 4]
# puts "hello"[-1]

# # Escape chars

# # \n # new line
# # \t #tab

# # Interpolation
# # use double quotes!!!!!
# city = "Paranaque"

# puts "City of #{city}"

# #so in js it's ${} but in ruby it's #{}

# # Common string methods
# #  .capitalize (first letter)
# #  .include?
# #  .upcase
# #  .downcase
# #  .empty? (checks if string is empty)
# #  .length
# #  .reverse
# #  .split (sentences into words, strings into letters)
# #  .strip
# #  .sub(a, b) (replace a with b)
# #  .gsub(a, b) (same but all as)
# #  .insert(i, a)
# #  .delete(a)
# #  .prepend() (append in front)

# #  Convert to string
# #   .to_s

# #   Symbols
# #   add :my_symbol

# #   nil means nothing
# #   nil instead of null

# # NAMING VARIABLES
# # use snake_case :<

# # INPUT AND OUTPUT
# # for output
#   # use puts (new line), print (all same line), p (to debug)
# # for input 
#   # use gets (always adds new line)
#   # .chomp is a common method to trim seperators (like \n)

# # CONDITIONALS
# #  if, elsif (not else if :<), else
# #  if vs unless (unless is opposite of if, does code when condition is false)

# #   if attack_by_land == true
# #     puts "release the goat"
# #   elsif attack_by_sea == true
# #     puts "release the shark"
# #   else
# #     puts "release Kevin the octopus"
# #   end

# #   boolean values
# #   ==, !=, >, <, <=, >=
# #   .eql? (checks value type and value)
# #   .equal? (checks if exact same object in memory)

# #   spaceship operator (<=>)
# #   -1 if left is smaller
# #   0 if equal
# #   1 if left is larger

# # Ternary operator
# # conditional statement ? <execute if true> : <execute if false>

# # Case statement
# # case <var name>
# # when <condition>
# #   <code to execute here>
# # can use multiple whens then an else then an end


# # LOOPS
# # <keyword> <condition> do
# #  code here
# # end

# # KEywords include 
#   # loop (meh)
#   # while (set i counter above)
#   # until (set i counter above too) (opposite of while loop lol)

#   #for loop also
#   # .times (will repeat n number of times
#   # .upto()
#   # .downto()
  
# # Ranges
# # (1..5) inclusive (includes 5)
# # (1...5) exclusive (no 5)

# # Arrays
# # .push() (adds at the end)
# # .pop() (removes from the end)

# # .unshift() (adds in front)
# # .shift() (removes from front n returns that value)

# # .concat() to add arrays
# # .methods on an array will return long list of methods

# HASHES
# created like js objects
# my_hash = {
#   "key" => "value",
# }
# => is called a hash rocket

# to access:
#  same with array (call hash value by key)
#  hash["key"]
#  use .fetch("key") 
#  use .delete to remove
#  .keys and .values are methods too
#  to merge ,, hash1.merge(hash2)

# symbols as hash keys ( like this key: value,)
# # 'Rocket' syntax
# american_cars = {
#   :chevrolet => "Corvette",
#   :ford => "Mustang",
#   :dodge => "Ram"
# }
# # 'Symbols' syntax
# japanese_cars = {
#   honda: "Accord",
#   toyota: "Corolla",
#   nissan: "Altima"
# }

# accessing them is by using :key

# METHODS
# functions n methods are the same
# everything in ruby is an object so all are methods, no functions

# def new_method
#   "arstin"
# end

# puts new_method

def newer_method(age = "23")
  "Arstin is " + age + " years old."
end

puts newer_method()

# add return statement!
# you can chain methods too to make it concise!
# predicate methods - have ? and return booleans
# name your boolean methods with ? too

# to change value of var, add ! (bang method) at the end so it changes actual value.
