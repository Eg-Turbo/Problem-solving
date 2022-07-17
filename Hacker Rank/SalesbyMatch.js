function sockMerchant(n, ar)  {
    let i = 0
    let res = 0
    while(ar[i]!=undefined){
        if(ar.indexOf(ar[i])==ar.lastIndexOf(ar[i])) i++
        else {
            ar.splice(ar.lastIndexOf(ar[i]),1)
            ar.splice(i,1)
            res++
        }
    }
    return res
}