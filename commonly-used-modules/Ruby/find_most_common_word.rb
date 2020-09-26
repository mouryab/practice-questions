# Input - twp arguments
# literatureText, a string represneting the block of text
# wordsToExclude, a list of strings representing the most commonly used words to be
# excluded while analyzing the frequency
# output - return a list of strings representing the most frequently used word in the text or in case of a tie, 
# all of the most frequently used words in the text
# words that have different case are counted towards to the same word

def score(literatureText, wordsToExclude)
  excluded_word_hash = Hash.new(0)
  wordsToExclude.each do |key| 
    excluded_word_hash[key] = 1
  end
  word_list = Array.new
    
  
  freq_hash, max = convert_to_freq_hash(literatureText.split(" "), excluded_word_hash)  
      
  freq_hash.each do |k, v| 
    word_list << k if v == max  
  end
    
  word_list
end

def convert_to_freq_hash(arr, ex_word_hash)
  hash = Hash.new(0)
  max = 0
  arr.each do |word|
    unless ex_word_hash[word]
      max = 1 if max == 0 
      if hash[word]
          hash[word] += 1
        if hash[word] > max
         max = hash[word]
        end      
      else
        hash[word] = 1
      end   
    end
  end      
  return hash, max    
end

