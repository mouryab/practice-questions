
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap()
    minHeap.addArray(nums);
    let count = minHeap.length() - k
    while(count){
        
        minHeap.remove()
        count--
    }
    return minHeap.remove()
    
};