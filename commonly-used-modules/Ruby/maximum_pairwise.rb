# Maximum Pairwise Product
# Find the maximum product of two distinct numbers in a sequence of non-negative integers.
# Input: A sequence of non-negative integers.
# Output: The maximum value that can be obtained by multiplying two different elements from the sequence.

def naive_algorithm(arr)
	product = 0
	arr.each do |i|
	  arr.each do |j|
	  	p = arr[i] * arr[j]
	  	product =  p if product < p
	  end	
	end		
	product
end	


def fast_multiplication(arr)
	product = 0
	max  = arr[0]
	arr.each do |i|

	  arr.each do |j|
	  	p = arr[i] * arr[j]
	  	product =  p if product < p
	  end	
	end		
	product
end

