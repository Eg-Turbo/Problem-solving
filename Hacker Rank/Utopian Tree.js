function utopianTree(n) {
    // Write your code here
    let res = 1
    for (let i = 1 ; i<=n ; i++) {
        if(i%2!=0)res*=2
        else res+=1
    }
    return res
}