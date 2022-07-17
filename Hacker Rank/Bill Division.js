function bonAppetit(bill, k, b) {
    // Write your code here
    let val = 0 
    let exa = 0 
    for(let i =0;i<bill.length;i++){
        if(i==k) {exa+=bill[i]
        continue
        }
        else {
            val+=bill[i]
            exa+=bill[i]
        }
    }
    val/=2
    exa/=2
    if(val==b)console.log("Bon Appetit")
    else console.log(exa - val)

}
