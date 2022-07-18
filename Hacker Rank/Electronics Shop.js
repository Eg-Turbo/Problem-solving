function getMoneySpent(keyboards, drives, b) {
    let res = []
    keyboards = keyboards.sort((a,b)=>a-b).reverse()
    drives = drives.sort((a,b)=>a-b).reverse()
    for(let i = 0 ; i<keyboards.length ; i++) {
        for(let j = 0 ; j<drives.length ; j++) {
           if (b>=keyboards[i]+drives[j]) res.push (keyboards[i]+drives[j])
           else continue 
        }
    }
    return res[0] == undefined ? -1 : Math.max(...res) 
}

