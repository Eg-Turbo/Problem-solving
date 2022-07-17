function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 1
    let src = Math.max(...candles)
    candles.splice(candles.indexOf(src),1)
    while(candles.indexOf(src)!=-1){
        count++
        candles.splice(candles.indexOf(src),1)
    }
    return count
    
}
