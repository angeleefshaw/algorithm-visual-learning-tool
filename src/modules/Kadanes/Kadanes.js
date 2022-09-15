//Take in an array of numbers and return the max sum of any subarray of consecutive numbers

function kadanesAlgorithm(array) {
    let maxNum = 0
    let maxNumSoFar = array[0]

    for(let i=0; i <= array.length; i++) {
        (array[i] + maxNum) > array[i] ? maxNum = array[i] + maxNum : maxNum = array[i]
        maxNum > maxNumSoFar ? maxNumSoFar = maxNum : null
    }

    return maxNumSoFar
}

  
//output 19
arr1 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
arr2 = [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]

console.log(kadanesAlgorithm(arr2))