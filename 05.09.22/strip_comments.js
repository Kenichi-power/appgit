function solution(str1, symb) {
  let str2 = str1.split('\n');
  for(let i = 0; i < str2.length; i++)
    for(let j = 0; j < symb.length; j++)
      str2[i] = str2[i].split(symb[j])[0].trim();
    
  return str2.join('\n');
}