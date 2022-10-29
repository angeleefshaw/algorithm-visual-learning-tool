import { defineStore } from 'pinia'

export const useKadanesStore = defineStore('Kadanes', {
    state: () => ({ 
        maxSum : 0,
        maxSumSoFar: 0,
        subArr: [],
        maxSumSubArray: {}
     }),
    getters: {
      
    },
    actions: {
        setSubArr (array) {
            this.subArr = array
        },
        setMaxSum (number) {
            this.maxSum = number
        },
        setMaxSumSoFar (number) {
            this.maxSumSoFar = number
        },
        setMaxSumSubArr( array ) {
            this.maxSumSubArray = array
        }
    },
  })