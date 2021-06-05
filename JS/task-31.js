// Используя операцию rest дополни код функции add() так, чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
// Change code below this line
function add(...args) {
  sum = 0;
  for(arg of args){
    sum += arg;
  }
  return sum;
  // Change code above this line
}
