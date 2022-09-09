function findNumber(array){
    let allSum = ((1+(array.length + 1))*(array.length + 1))/2;
    let currentSum = array.reduce((acc, num) => acc + num, 0)
    return allSum - currentSum;
}