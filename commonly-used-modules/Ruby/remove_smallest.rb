# Given an array of integers, remove the smallest value.
# Do not mutate the original array/list.
# If there are multiple elements with the same value, remove the one with a lower index.
# If you get an empty array/list, return an empty array/list.

# Don't change the order of the elements that are left.

# Examples
# remove_smallest([1,2,3,4,5]) = [2,3,4,5]
# remove_smallest([5,3,2,1,4]) = [5,3,2,4]
# remove_smallest([2,2,1,2,1]) = [2,2,2,1]

class RemoveSmallest
  def remove_smallest(numbers)
       min =  nil
       ind  =  nil
       numbers.each_with_index do |num, idx|
         if min.nil?
           min = num
           ind = idx
         elsif num < min
           min = num
           ind = idx
         end
       end

      (!ind.nil?) ? numbers.reject.each_with_index {|i, ix| ix == ind } : numbers
    end
end

# ideal solution
# def remove_smallest(numbers)
#   numbers.reject.with_index { |_,i| i == numbers.index(numbers.min) }
# end
# no mutation to the existing array
