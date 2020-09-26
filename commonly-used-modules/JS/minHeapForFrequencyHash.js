class MinHeap {
    constructor (){
        this.data = new Map();
        this.dataLength = 0;
    }
}
// TODO


MinHeap.prototype.addArray = function(arr){
    while(this.dataLength){
        this.add(arr.pop())
    }
}

MinHeap.prototype.add = function(val){
    if(this.data[val]) {
      this.data[val] = this.data[val] + 1;
    } else {
      this.data[val] = 1;
      this.dataLength = this.dataLength + 1;
    }
    this.bubbleUp(this.dataLength - 1);
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
    if (this.dataLength === 0) return null;
    
    let min;

    if (this.dataLength === 1){
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
    let map = new Map();
    while(this.dataLength){
        let key = this.remove();
        if(map.get(key)) {
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }
    return map;
}

MinHeap.prototype.length = function(){
    return this.dataLength;
}