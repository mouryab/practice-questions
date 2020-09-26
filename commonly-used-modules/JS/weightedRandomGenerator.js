function weightedRandomNumber(weightedArr) {
	const weightSum = weightedArr.reduce((sum, el) => sum + el, 0);

	const rnd = Math.random()*weightSum;

	for(let i = 0; i < weightedArr.length; i++) {
	  if(rnd < weightedArr[i])
	    return i;
	  rnd -= weightedArr[i];
	}
}

function weightedRandomNumberBinarySearch(weightedArr) {
	let weightSum = 0;
	const prefixSum = new Array(weightedArr.length);
	for (let i = 0; i < weightedArr.length; i++) {
		weightSum += el;
		prefixSum[i] += weightSum;
	}

	const target = weightSum * Math.random();

    let low = 0, high = weightedArr.length - 1, mid;
        while (low < high) {
            // better to avoid the overflow
            mid = low + (high - low) / 2;
            if (target > this.prefixSums[mid]) {
            	low = mid + 1;
            } else {
            	high = mid;
            }
        }
    return low;
}