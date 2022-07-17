function gradingStudents(grades) {
    // Write your code here
    let n = 0
    let result = []
            for(let i = 0 ; i<grades.length ; i++) {
                n = grades[i]
                if(n<38) result.push(n)
                else {
                    for(let j = 0 ;j<2 ; j++) {
                        if(n%5==0) break
                        else n+=1
                    }
                    if(n%5==0) result.push(n)
                    else result.push(grades[i])  
        } 
    }
    return result
}