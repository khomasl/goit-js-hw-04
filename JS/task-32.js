// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые больше чем заданное число. Это число должно быть первым параметром функции.
// Change code below this line
function addOverNum(...args) {
    let total = 0;
    num = args[0];
    len = args.length;
    for (let i = 1; i <= len; i += 1) {
      if (args[i] > num){
        total += args[i];
      }  
    }
  
    return total;
    // Change code above this line
  }
  