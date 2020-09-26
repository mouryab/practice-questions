class MinHeap {
    constructor (){
        this.data = []
    }
}

MinHeap.prototype.addArray = function(arr){
    while(arr.length){
        this.add(arr.pop())
    }
}

MinHeap.prototype.add = function(val){
    this.data.push(val)
    this.bubbleUp(this.data.length - 1)
}

MinHeap.prototype.bubbleUp = function(index){
    
    while(index > 0){
        let parent = Math.floor(index / 2)
        if (this.data[parent] > this.data[index] ){
            let temp = this.data[parent]
            this.data[parent] = this.data[index]
            this.data[index] = temp;
        }
        index = parent;    
    }
    
}

MinHeap.prototype.remove = function(){
    if (this.data.length === 0){
        return null
    }
    let min ;
    if (this.data.length === 1){
      min =  this.data.pop();   
      return min;  
    }
    min = this.data[0]
    this.data[0] = this.data.pop()
    this.bubbleDown(0)
    return min
    
}

MinHeap.prototype.bubbleDown = function(index){
    let nextIndex ;
    let left = (2 * index) + 1
    let right = (2 * index ) + 2
    if (this.data[left]  < this.data[index] && this.data[right] < this.data[index]){
        nextIndex = this.data[left] < this.data[right] ? left : right
    }
    else if (this.data[left] < this.data[index]){
        nextIndex = left
    }
    else if (this.data[right] < this.data[index]){
        nextIndex = right
    }
    if (nextIndex){
        [this.data[nextIndex], this.data[index]] = [this.data[index], this.data[nextIndex]]
        this.bubbleDown(nextIndex)
    }
}
MinHeap.prototype.sortedArray = function(){
    let array = []
    while(this.data.length){
        
        array.push(this.remove())
    }
    return array
}

MinHeap.prototype.length = function(){
    return this.data.length
}