function birthday(s, d, m) {
    // Write your code here
    let res = 0
    for(let i = 0 ; i<s.length ; i++) {
        let num = s[i]
        for(let j =1 ; j<m ; j++) {
            num+=s[i+j]
        }
        if(num==d)res++
    }
    return res
}