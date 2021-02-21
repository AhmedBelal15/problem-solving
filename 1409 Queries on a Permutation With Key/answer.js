const processQueries = (queries, m) => {
//construct arrays    
    const P = []
    const output = []
    for(let i = 1; i<=m; i++){
        P.push(i)
    }
//shift number to first
const shiftToFirst = (arr, index) => {
    let temp = arr[index]
    for(let i = index; i >= 1; i--){
        arr[i] = arr[i-1]
    }
    arr[0] = temp
}

for(let i = 0; i < m; i++){
    const num = queries[i];
    const indexInP = P.indexOf(num)
    if(indexInP !== -1){
        output.push(indexInP)
        shiftToFirst(P, indexInP)
    }

}
return output
};

console.log(processQueries([7,5,5,8,3], 8));