# Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities.
# "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

# Valid arrays
# a = [121, 144, 19, 161, 19, 144, 19, 11]
# b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
# comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
# It gets obvious if we write bs elements in terms of squares:
# a = [121, 144, 19, 161, 19, 144, 19, 11]
# b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
# Invalid arrays
# If we change the first number to something else, comp may not return true anymore:

# a = [121, 144, 19, 161, 19, 144, 19, 11]
# b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
# comp(a,b) returns false because in b 132 is not the square of any number of a.

# a = [121, 144, 19, 161, 19, 144, 19, 11]
# b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
# comp(a,b) returns false because in b 36100 is not the square of any number of a.

# a or b might be [] (all languages except R, Shell). a or b might be nil or null or None (except in Haskell, Elixir, C++, Rust, R, Shell).

# If a or b are nil (or null or None), the problem doesnt make sense so return false.

# If a or b are empty the result is evident by itself.

def comp(array1, array2)
  return false if array1.nil? || array2.nil? || (array1.length != array2.length)
  arr1 = array1.sort
  arr2 = array2.sort
  val = true
  arr1.each_with_index do |a1, index|
    val = (arr2[index] == a1*a1)
    return false unless val
  end
  val
end
