function pageCount(n, p) {
    // Write your code here
    let pn = 1
    let res = 0
    if(p==1||p==n)return res
    if(n%2==0){
        if(p<=n/2){
            for(let i=0 ; i<n/2 ; i++){
                pn+=2
                res++
                if(pn==p || p==pn-1)return res
            }

        }else {
            pn = n
            for(let i = 0; i<n/2 ; i++){
                pn-=2
                res++
                if(pn==p || p==pn+1)return res
            }
        }
    }else {
        if(p<=(n-1)/2){
            for(let i=0 ; i<(n-1)/2 ; i++){
                pn+=2
                res++
                if(pn==p || p==pn-1)return res
            } 
        }else {
            pn = n
            if(pn==p+1) return res
            for(let i = 0; i<(n-1)/2 ; i++){
                pn-=2
                res++
                if(pn==p || p==pn-1)return res
            }
        }
    }
}
