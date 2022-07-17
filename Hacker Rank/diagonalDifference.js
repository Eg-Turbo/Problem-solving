function diagonalDifference(arr) {
    // Write your code here
    let res1 = 0
    let res2 = 0
    for(let i = 0 ;i <arr.length ; i++) {
        res1 +=arr[i][i]
        res2 +=arr[i][arr.length-1-i]
    }
    let res = res1>res2?res1-res2:res2-res1
    return res 

}
