function circularArrayRotation(a, k, queries) {
    // Write your code here
    let res = []
    for(let i = 0 ; i<k;i++){
        a.unshift(a[a.length-1])
        a.splice(-1)
    }
    for(let i = 0 ;i<queries.length ; i++) {
        res.push(a[queries[i]])
    }
    return res
}