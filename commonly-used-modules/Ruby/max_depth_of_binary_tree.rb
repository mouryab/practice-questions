# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

class MaxDepthOfBinaryTree
# @param {TreeNode} root
# @return {Integer}
def max_depth(root)
   return 0 if !root    
    [max_depth(root.left), max_depth(root.right)].max + 1
end
 
end