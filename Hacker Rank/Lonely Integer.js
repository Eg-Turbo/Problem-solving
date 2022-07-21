function lonelyinteger(a) {
    // Write your code here
    let res = 0
    a.forEach(ele=>{
        if(a.indexOf(ele)==a.lastIndexOf(ele)) res = ele
    })
    return res
}