function viralAdvertising(n) {
    // Write your code here
    let shared = 5
    let cumulative = 2
    for(let i = 0 ;i<n-1 ; i++) {
        shared = Math.floor(shared/2)*3
        cumulative +=Math.floor(shared/2) 
    }
    return cumulative;
}