//Release 0. Итерационный подсчет факториала
function iterativeFactorialCalculation(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result*=i;
  }
  return result;
}
console.log(iterativeFactorialCalculation(6)) 

//Release 1. Рекурсивный расчет факториала
 function recursiveFactorialCalc(num) {
  if(num === 1) {
    return num;
  } 
    return  num * recursiveFactorialCalc(num - 1);
 }
console.log(recursiveFactorialCalc(6))


