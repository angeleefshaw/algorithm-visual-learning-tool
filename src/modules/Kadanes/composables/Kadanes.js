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
        if ((array[i] + maxSum) > array[i] ){
            maxSum = array[i] + maxSum

            kadanesStore.setMaxSum(maxSum)
            setSubArray(maxSum, subArr)
        } else {
            maxSum = array[i]

            kadanesStore.setMaxSum(maxSum)
            resetSubArray(maxSum, subArr, iteration)
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

function setSubArray (maxSum, subArr) {
    subArr.push(maxSum)
    kadanesStore.setSubArr(subArr)
}

function resetSubArray (maxSum, subArr, iteration) {
    subArr=[]
    iteration = 0
    subArr.push(maxSum)

    kadanesStore.setSubArr(subArr)
}



  
//output 19
// arr1 = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// arr2 = [-10, -2, -9, -4, -8, -6, -7, -1, -3, -5]

