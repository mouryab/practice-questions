# def scramble2(s1,s2)
#   s2.chars.uniq.all?{|x| s2.count(x)<=s1.count(x)}
# end


# def scramble(s1,s2)
#   s1_chars = s1.chars.sort
#   s2_chars = s2.chars.sort
#   i = 0
#   j = 0
#   while (i < s1_chars.length) do
#      j += 1 if (s1_chars[i] == s2_chars[j])
#      i += 1   
#   end 
#     return j == s2_chars.length
# end

# Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
# Only lower case letters will be used (a-z). No punctuation or digits will be included. Performance needs to be considered
# scramble('rkqodlw', 'world') ==> True
# scramble('cedewaraaossoqqyt', 'codewars') ==> True
# scramble('katas', 'steak') ==> False


def scramble1(s1, s2)

  s1_chars = s1.chars.sort
  s2_chars = s2.chars.sort
  i = 0
  j = 0
  while (i < s1_chars.length) do
     j += 1 if (s1_chars[i] == s2_chars[j])
     i += 1   
  end 
    return j == s2_chars.length
end

# more efficient
def scramble(s1,s2)
  h1 = Hash[s1.chars.group_by { |e| e }.map { |k,v| [k,v.size] }]
  h2 = Hash[s2.chars.group_by { |e| e }.map { |k,v| [k,v.size] }]
  return h2.all? { |k,v| h1[k] >= v rescue false }
end

def r_str_gen
	o = [('a'..'z'),('A'..'Z')].map(&:to_a).flatten
	(0...rand(1000)).map { o[rand(o.length)] }.join
end	

# random string generator
# o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
# => ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
#irb(main):034:0> string = (0...50).map { o[rand(o.length)] }.join
# => "eDyatcQXysRMijfMXMIOcKQjTFNIxcOyThPBdCvtYHQjjgWnVX"