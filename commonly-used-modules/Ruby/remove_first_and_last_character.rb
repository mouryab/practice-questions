# It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string.
# You're given one parameter, the original string.
# You don't have to worry with strings with less than two characters.

class RemoveFirstAndLastCharacter


def remove_char(s)
  s_arr = s.chars
  if (s_arr.length > 1)
   s_arr.pop
   s_arr.shift
  end
  s_arr.join
end

end
