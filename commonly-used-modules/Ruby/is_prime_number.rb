# Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.
# a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
#  isPrime(5) => true
# Assumptions
# You can assume you will be given an integer input.
# You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

Class IsPrimeNumber

# Test if number is prime
def isPrime(num)
  val = true

  if num > 1
    # eliminate all even nos
    if num == 2
      val = true
    elsif ((num % 2) == 0)
      val = false # even nos other than 2
    else
     # odd nos
     i = 2
     while (i < ((num/2) +1)) do
      val &= ((num % i) != 0) unless ((num % 2) == 0)
      i += 1
     end
    end

  else
   val = false
  end

  val
end

def isPrime1(num)
  return true if [2,3,5,7,11,17].include? num
  return false if num <= 1 || num % 2 == 0 || num % 3 == 0
  (4..Math.sqrt(num)).each do |i|
    return false if num % i == 0
  end
  true
end

end
