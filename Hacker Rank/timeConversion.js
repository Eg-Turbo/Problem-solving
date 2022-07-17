function timeConversion(s) {
    // Write your code here
    let res = ""
    let hours = s[0]+s[1]
    let minuts = s[3]+s[4]
    let seconds = s[6]+s[7]
    let ni = s[8]+s[9]
    if(ni=="AM"){
        if(hours == "12") hours = "00"
        res = `${hours}:${minuts}:${seconds}`
    }else {
        if(hours == "12") hours = "12"
        else hours = Number.parseInt(hours)+12
        res = `${hours}:${minuts}:${seconds}`
    }
    return(res)
}
