//Take in an array of numbers and return the max sum of any subarray of consecutive numbers
import { useKadanesStore } from '../store/KadanesStore'

const kadanesStore = useKadanesStore();

export function kadanify(array) {
    let maxSum= 0
    let maxSumSoFar = array[0]
    let subArr = []
    let iteration = 0

    for(let i=0; i <= array.length - 1; i++) {
        iteration ++
        if ((array[i] + maxNum) > array[i] ){
            maxSum = array[i] + maxNum
            kadanesStore.setMaxSum(maxSum)
            setSubArray(subArr)
        } else {
            maxSum = array[i]
            kadanesStore.setMaxSum(maxSum)
            resetSubArray(subArr, iteration)
        }
        if (maxSum> maxSumSoFar) {
            maxSumSoFar = maxSum
            kadanesStore.setMaxSumSoFar(maxSumSoFar)
        }
       

    }

    const maxSumSubArr = subArr.splice(0, iteration - 1)
    kadanesStore.setMaxSumSubArr(maxSumSubArr)
    return maxSumSoFar
}

function resetSubArray (subArr, iteration) {
    subArr=[]
    iteration = 0
    subArr.push(array[i])

    kadanesStore.setSubArr(subArr)
}

function setSubArray (subArr) {
    subArr.push(array[i])

    kadanesStore.setSubArr(subArr)
}

  
//output 19
// arr1 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// arr2 = [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]

