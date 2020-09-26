# @param {Integer} n
# @param {Integer[][]} connections
# @return {Integer[][]}
def critical_connections(n, connections)
    #  connections = [[0,1],[1,2],[2,0],[1,3]]
   adj_matrix = Array.new(n)
   n.times { |i|
     arr = Array.new(n)
     n.times  { |j| arr[j] = 0 }
     adj_matrix[i] = arr
  }
   connections.each do |arr| 
     adj_matrix[arr[0]][arr[1]] = 1
     adj_matrix[arr[1]][arr[0]] = 1
   end
    
   puts "#{adj_matrix}"
    
end