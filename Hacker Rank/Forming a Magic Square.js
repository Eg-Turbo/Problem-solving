function formingMagicSquare(s) {
    // Write your code here
    let x = []
    let res = [0,0,0,0,0,0,0,0]
    let comp = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]]
    for(let i = 0 ; i<s.length ; i++){
        x.push(...s[i])
        }
    for(let i = 0 ; i<comp.length ; i++){
     for(let j = 0 ; j<9 ; j++){
        res[i] +=Math.abs(x[j]-comp[i][j])
        }
     }
    return Math.min(...res)     
}