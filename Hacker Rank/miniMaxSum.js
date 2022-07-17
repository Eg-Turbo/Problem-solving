function miniMaxSum(arr) {
    // Write your code here
      let minSum = 0
    let maxSum = 0 
    let total = 0
    for (let i =0 ; i<arr.length ; i++) {
        total =total + arr[i]
    }
    maxSum = total - Math.min(...arr)
    minSum = total - Math.max(...arr)
    console.log(`${minSum} ${maxSum}`)
}