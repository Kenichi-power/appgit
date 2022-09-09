function moveZeros(arr) {
    return arr.reduceRight((acc,val)=>val===0?[...acc, val]:[val,...acc],[]);
}