function quickSort(l,p,r) {
    if (p < r) {
       let q = partition(l,p,r)
        quickSort(l,p,q-1)
        quickSort(l,q+1,r)
    }
   
}

function partition(l,p,r) {
    let pivot = l[r]
    let i = p-1
    for (let j = p; j <= r -1; j++){
        if (l[j] <= pivot) {
            i++
            [l[i], l[j]] = [l[j], l[i]]
    
        }
    }
    [l[i + 1], l[r]] = [l[r], l[i + 1]]
    return(i+1)
}

let p = 0
let l = [3,2,2,1,5,6,0]
let r = (l.length)-1 
quickSort(l,p,r)

console.log(l)
