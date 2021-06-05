// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства это имя сотрудника, а значение свойства это зарплата. Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её. Используй переменную totalSalary для хранения общей суммы зарплаты.
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line
  const arrSalaries = Object.values(salaries);
  for (salary of arrSalaries){
    totalSalary += salary;
  }
  // Change code above this line
  return totalSalary;
}