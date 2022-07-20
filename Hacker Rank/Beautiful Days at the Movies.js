function beautifulDays(i, j, k) {
    // Write your code here
    let res = 0 
    for ( i  ; i<= j ; i++) {
        let num = +i.toString().split("").reverse().join("")
         if(Math.abs(i-num) % k == 0) res++
    }
    return res
}
