module LinkedList
  class Node
    attr_accessor :value, :next_node

    def initialize(value, next_node)
      @value = value
      @next_node = next_node
    end
  end

  class Stack #Last In first out
    attr_reader :size
    attr_reader :max_size  
    
    def initialize(max = nil)
      @first = nil
      @max_size = max
      @size = 0    
    end

    def push(value)
      if is_full?
        @first = Node.new(value, @first)
        @size += 1
        puts @first
      else throw Exception
      end    
 
    end
    alias_method :"<<", :push

    def pop
      raise "Stack is empty" if is_empty?
      value = @first.value
      @first = @first.next_node
      value
    end

    def is_empty?
      @first.nil?
    end
      
    def is_full?
      if @max_size
        @size < @max_size
      else 
        true
      end
    end    
      
    def size
      @first.size
    end

    def look
      @first.last
    end

    def min
      min = @first && @first.value
      next_node = @first.next
      while next_node
        if (next_node.value && next_node.value < min)
            min = next_node.value
        end    
        next_node = next_node.next    
      end      
     min    
   end      

  end      
end