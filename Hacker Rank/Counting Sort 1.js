function countingSort(arr) {
    // Write your code here
    let res = new Array(100).fill(0)
    arr.forEach(element => res[element]+=1)
    return res
}