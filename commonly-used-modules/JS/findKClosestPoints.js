class MinHeap {
    constructor(){
        this.arr = [];
    }
    
    parent(i){
        return Math.floor((i-1)/2);
    }
    
    leftChild(i){
        let left = 2*i + 1;
        if(left < this.arr.length) return left;
        return false
    }
    
    rightChild(i){
        let right = 2* i + 2;
        if(right < this.arr.length) return right;
        return false
    }
    
    insert(item){
        this.arr.push(item);
        this.heapifyUp();
    }
    
    remove(){
        if(this.arr.length){
            let item = this.arr[0];
            this.arr[0] = this.arr[this.arr.length-1]
            this.arr.pop();
            this.heapifyDown();
            return item;
        }
        else return false;
        
    }
    
    hasParent(i) {
        return i > 0 && i < this.arr.length;
    }
    
    swap(left, right){
        let item = this.arr[left];
        this.arr[left] = this.arr[right]
        this.arr[right] = item;
    }
    
    heapifyUp(){
        let index = this.arr.length-1;
        while(this.hasParent(index) && this.arr[index][0] < this.arr[this.parent(index)][0]){
            this.swap(index, this.parent(index));
            index = this.parent(index);       
        }
        
    }
    
    heapifyDown(){
        let index = 0;
        while(this.leftChild(index)){
            let smallChildIndex = this.leftChild(index);
            if(this.rightChild(index)){
                 if(this.arr[this.rightChild(index)][0] < this.arr[this.leftChild(index)][0]){
                smallChildIndex = this.rightChild(index) 
            }        
            }
               
            if(this.arr[index][0] < this.arr[smallChildIndex][0]){
                break;
            }
            else this.swap(index, smallChildIndex)
            index = smallChildIndex;
        }
    }
}

var kClosest = function(points, K) {
    let que = new MinHeap();
    let result = [];
    points.forEach((point, index) => {
        que.insert([point[0]**2 + point[1]**2, index]);
    });
    
    console.log(que);
    for(let i=0; i < K; i++) {
      let item = que.remove();
      result.push(points[item[1]])
    }
    
    return result;
};
