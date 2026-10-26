let a=[12,10,45,23,66]
let largest=a[0]
for(let i=0;i<a.length;i++){
    if (a[i]>largest){
        largest=a[i]
    }
}
console.log(largest)