function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let tot1 = x1
    let tot2 = x2
    for (let i = 0 ; i<10000 ; i++) {
        tot1+=v1
        tot2+=v2
        if(tot1 == tot2)return "YES"
    }
    return "NO"
}