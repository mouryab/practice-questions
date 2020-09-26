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
      @min_node = nil    
    end

    def push(value)
      if is_full?
        @first = Node.new(value, @first)
        if @min_node && (@min_node.value < value)
           @min_node.value = value
        elsif !@min_node
          @min_node = Node.new(value, nil)
        end
        @size += 1
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