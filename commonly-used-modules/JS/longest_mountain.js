// Longest Mountain in Array
// Difficulty:Medium

// Let's call any (contiguous) subarray B (of A) a mountain if the following properties hold:

// B.length >= 3
// There exists some 0 < i < B.length - 1 such that B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
// (Note that B could be any subarray of A, including the entire array A.)

// Given an array A of integers, return the length of the longest mountain. 

// Return 0 if there is no mountain.

// Example 1:

// Input: [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
// Example 2:

// Input: [2,2,2]
// Output: 0
// Explanation: There is no mountain.
// Note:

// 0 <= A.length <= 10000
// 0 <= A[i] <= 10000
// Follow up:

// Can you solve it using only one pass?
// Can you solve it in O(1) space?


// /**
//  * @param {number[]} A
//  * @return {number}
//  */
// /**
//  * @param {number[]} A
//  * @return {number}
//  */
var longestMountain = function longestMountain(A) {
    var n = A.length, 
        max = 0,
        temp_arr = [];

    if (n < 4) {
        return 0;
    } else {
    	if (A[1] > A[0]) {
    		temp_arr = [A[0]];
    	} 

        while(0 < i < n-1) { 
        	if ((A[i-1] < A[i]) && (A[i] < A[i+1])) {
        		temp_arr.push(A[i]);
        		// increasing but not the peak
        	} else if ((A[i-1] < A[i]) && (A[i] > A[i+1])) {
        		temp_arr.push(A[i]);
        		// increasing and peak
        	} else if ((A[i-1] > A[i]) && (A[i] > A[i+1])) {
        		temp_arr.length && temp_arr.push(A[i]);
        		// decreasing but not end of the mountain
        	} else if ((A[i-1] > A[i]) && (A[i] < A[i+1])) {
        		temp_arr.push(A[i]);
        		calcMax();
        		temp_arr = [A[i]];
        		// decreasing and end of mountain
        	} else if ((A[i-1] == A[i]) && (A[i] > A[i+1])) {
        		// end and push existing sub-array
        		calcMax();
        		temp_arr = [];        		
        	} else if ((A[i-1] == A[i]) && (A[i] < A[i+1])) {
        		//start of the mountain
        		temp_arr = [A[i]];        		
        	} else if ((A[i-1] < A[i]) && (A[i] == A[i+1])) {
        		// don't do anything
        		// end and push existing sub-array
        		temp_arr = []; //easy to understand - no need
        	} else if ((A[i-1] > A[i]) && (A[i] == A[i+1])) {
        		// end of the mountain
        		temp_arr.push(A[i]);
        		calcMax();
        		temp_arr = [];
        	} 
        	i++;
        }

        if (A[n-2] > A[n-1]) {
    		temp_arr.length && temp_arr.push(A[n-1]);
        	calcMax();
    	} 

 		return max;
    }

    function calcMax(){
		if (max < temp_arr.length) max = temp_arr.length 
    }        
};