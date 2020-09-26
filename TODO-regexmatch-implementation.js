function isMatch(text, pattern) {
  if (!text && !pattern || (text.length < pattern.length)) return true
  
  let ptr1 = 0
  let ptr2 = 0
  
  while (ptr1 < text.length && ptr2 < pattern.length) {
    let textC = text[ptr1]
    let matchSymbol = pattern[ptr2]
    
    const isWildCard = matchSymbol === '.'
    const isRepeating = !!((ptr2 + 1 < pattern.length) && (pattern[ptr2 + 1] === '*'))
    
    if (isRepeating) {
      // If we have a repeating wild card, we match everything after this point, given everything matched
      // before this point, we can return true
      if (isWildCard) return true
      
      // Blow through the matches
      while (textC === matchSymbol) {
        textC = text[++ptr1]
      }
      // Move pointer passed the wild card symbol
      ptr2++
    } else if (textC !== matchSymbol && !isWildCard) return false
    
    ptr1++
    ptr2++
  }
  
  // If we've hit the end of the text and pattern, we'd expect everything to have
  // matched, if pointers are not at the end didn't fully match
  return (ptr1 === text.length) && (ptr2 === pattern.length)
}