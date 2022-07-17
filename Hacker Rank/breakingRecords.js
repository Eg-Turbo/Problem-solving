function breakingRecords(scores) {
    let min = 0 
    let max = 0
    let minN = scores[0]
    let maxN = scores[0]
    scores.forEach(ele => {
        if(ele>maxN){
            maxN=ele
            max++
        }
        if(ele<minN){
            minN = ele
            min++
        }
    });
    return[max,min]
}