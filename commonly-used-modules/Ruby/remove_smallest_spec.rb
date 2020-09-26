describe "remove_smallest" do
  it "works for the examples" do
    Test.assert_equals(remove_smallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]")
    Test.assert_equals(remove_smallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]")
    Test.assert_equals(remove_smallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]")
    Test.assert_equals(remove_smallest([]), [], "Wrong result for []")
  end

  def randarray()
    (1..rand(1..10)).map{rand(1..400)}
  end

  it "returns [] if array has only one element" do
    10.times do
      x = rand(1..400)
      Test.assert_equals(remove_smallest([x]), [], "Wrong result for [#{x}]")
    end
  end

  it "returns an array that misses only one element" do
    10.times do
      arr = randarray()
      arr[rand(0...arr.length)] = arr.min if rand < 0.5
      Test.assert_equals(remove_smallest(arr.dup).length, arr.length - 1, "Wrong sized result for #{arr}")
    end
  end

  it "check for mutations to original array" do
    a = randarray() # generates the array
    b = a.dup # makes a swallow copy
    remove_smallest(a) # uses the original array with the function
    Test.assert_equals(a, b, "Mutated array") # test the arrays match
  end

  it "works for random arrays" do
    def solution(numbers)
      numbers = numbers.dup
      numbers.delete_at(numbers.find_index(numbers.min)) unless numbers.empty?
      numbers
    end

    20.times do
      arr = randarray()
      Test.assert_equals(remove_smallest(arr.dup), solution(arr.dup), "Wrong result for #{arr}")
    end
  end
end
