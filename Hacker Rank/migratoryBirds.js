function migratoryBirds(arr) {
    // Write your code here
    let carr = [0,0,0,0,0]
    while(arr[0]!=undefined) {
        switch(arr[0]){
        case 1 :
        carr[0]+=1
        break;
        case 2 :
        carr[1]+=1
        break;
        case 3 :
        carr[2]+=1
        break;
        case 4 :
        carr[3]+=1
        break;
        case 5 :
        carr[4]+=1
        break;
        }
        arr.splice(0,1)
    }
    return(carr.indexOf(Math.max(...carr))+1)   
}