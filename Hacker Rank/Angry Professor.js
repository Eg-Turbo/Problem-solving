function angryProfessor(k, a) {
    // Write your code here
    let num = a.filter(e=>e<=0) 
    return num.length>=k? "NO" : "YES"
}