# Definition for a binary tree node.
 class TreeNode
     attr_accessor :val, :left, :right
     def initialize(val)
         @val = val
         @left, @right = nil, nil
     end
 end

# @param {TreeNode} root
# @return {Integer}
class MinDepthOfBinaryTree
    
def min_depth(root)
    get_depth(root, 0)
end

def get_depth(node, depth)
  return depth if !node
  left = node.left
  right = node.right  
  if !left && !right
    depth += 1   
  elsif !right
    depth += get_depth(left, depth) + 1
  elsif !left
    depth += get_depth(right, depth) + 1
  else
    depth += [get_depth(left, depth), get_depth(right, depth)].min + 1
  end
    
  depth 
end
    
end    