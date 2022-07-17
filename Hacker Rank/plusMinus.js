function plusMinus(arr) {
    // Write your code here
     let pos = 0
    let neg = 0
    let zero = 0
    for (let i = 0 ; i<arr.length ; i++) {
        if (arr[i] > 0) pos ++ 
        else if (arr[i]<0) neg ++
        else zero ++
    }
    pos = pos / arr.length
    neg = neg / arr.length
    zero = zero / arr.length
    console.log(`${pos.toFixed(6)} \n${neg.toFixed(6)}\n${zero.toFixed(6)}`)

}