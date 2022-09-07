function wave(str){
    let str1 = str.split('');
    let arr = [];
    for(let i = 0; i < str.length; i++){
        if(str[i]== ' '){continue;}
        str1[i] = str1[i].toUpperCase()
        arr.push(str1.join(''))
        str1 = str.split('');   
    }
    return arr;
}