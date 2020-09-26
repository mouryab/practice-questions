class Heap
  attr_accessor :heap_size, :array_rep
  def left_child(index)
    2*index + 1
  end

  def right_child(index)
    2*index + 2
  end

  def left_child_key(index)
    @array_rep[left_child(index)]
  end

  def right_child_key(index)
    @array_rep[right_child(index)]
  end
ends