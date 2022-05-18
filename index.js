//Release 0. Итерационный подсчет факториала
function iterativeFactorialCalculation(num) {
  let result = 1;
  for(let i = 1; i <= num; i++) {
    result*=i;
  }
  return result;
}
// console.log(iterativeFactorialCalculation(6)) 

//Release 1. Рекурсивный расчет факториала
 function recursiveFactorialCalc(num) {
  if (num === 1) {
    return num;
  } 
  if (num === 0){return 1}
    return  num * recursiveFactorialCalc(num - 1);
 }
// console.log(recursiveFactorialCalc(0))
// const res = recursiveFactorialCalc(0);
// console.log(res);

module.exports = {iterativeFactorialCalculation, recursiveFactorialCalc};



