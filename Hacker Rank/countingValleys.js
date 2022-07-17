function countingValleys(steps, path) {
    // Write your code here
    let res = 0
    let cor = false
    let fr=0
    for (let i = 0 ; i<path.length ; i++) {
        if(path[i]=="D") res-=1 
        if(path[i]=="U") res+=1
        if(res<=-1){cor=true;}
        if(res==0 && cor===true) {fr++;cor=false}
    }
    return fr
}