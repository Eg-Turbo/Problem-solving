function countApplesAndOranges(s, t, a,b, apples,oranges) {
    // Write your code here
    let napp = 0
    let numA = 0
    let nora = 0
    let numO = 0
    for (let i = 0 ; i<apples.length; i++) {
        numA = apples[i]+a
        if(numA >= s && numA<=t)napp++
    }
    for (let j = 0 ; j<oranges.length; j++) {
        numO = oranges[j]+b
        if(numO >= s && numO<=t)nora++
    }
    console.log(napp)
    console.log(nora)
}
