def get_crates(m, totalCrates)
 n = totalCrates.length
 return totalCrates if m >= n
 find_min_crates(m, totalCrates)
end    

def find_min_crates(m, totalCrates)
  dist_arr = Array.new
  totalCrates.each do |crate|
    dist_arr << Math.sqrt(crate[0]*crate[0] + crate[1]*crate[1])
  end
    
  sorted_index_arr = dist_arr.map.with_index.sort.map(&:last).slice(0, m)
    # O(n) space 
end    