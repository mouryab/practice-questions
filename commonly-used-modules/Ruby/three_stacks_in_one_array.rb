class MultiStack < Array # Last In First Out
  attr_accessor :size
  NO_OF_STACKS  = 3

  def initialize(size)
    @store = Array.new(size)
    @stack1 = @store.slice(0,(size/3))
    @stack2 = @store.slice((size/3) + 1, 2*(size/3)]
    @stack3 = @store.slice(2*(size/3) + 1, size]
  end
  
  def pop
    @store.pop
  end
  
  def push(element)
    @store.push(element)
    self
  end
  
  def size
    @store.size
  end
  
  def look
    @store.last
  end
  
  private
  
  def empty?
    @store.empty?
  end
      
end