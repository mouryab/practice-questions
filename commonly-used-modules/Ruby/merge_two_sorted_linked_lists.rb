# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
  #initialize
  list = []
    
  # iterate
  while l1 || l2
    l1, l2, val = next_node(l1, l2)
    list << val
  end     
    
  return list
end


private

def next_node(l1, l2)
    val = nil
    if l1 && l2 && (l1.val > l2.val)
        val = l2.val
        l2 = l2.next
    elsif l1
       val = l1.val
       l1 = l1.next 
    elsif l2
       val = l2.val
       l2 = l2.next 
    end    
   
    return l1, l2, val
end    