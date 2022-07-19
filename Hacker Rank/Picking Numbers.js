function pickingNumbers(a) {
    // Write your code here
    let x = [...new Set(a)]
    let res = []
    let num = 0
    x.forEach(e=>{
        for(let i = 0 ; i<a.length ; i++) {
            if (e === a[i])num ++
        }
        res.push(num)
        num = 0
    })
    num = []
    x.forEach((e,w)=>{
        for(let i = 0 ; i<x.length ; i++) {
            if(Math.abs(e-x[i])==0)num.push(res[w])
        if (Math.abs(e-x[i])==1) num.push(res[w]+res[i])
        }
    })  
    return Math.max(...num)
}