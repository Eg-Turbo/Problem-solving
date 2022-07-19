function designerPdfViewer(h, word) {
    // Write your code here
    let res = []
    let alph = "abcdefghijklmnopqrstuvwxyz".split("")
    word = word.split("")
    word.forEach(ele => {
        res.push(h[alph.indexOf(ele)])
    });
    return Math.max(...res)*res.length
}