// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства. Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
  const propValues = [];
  if (Object.keys(products[0]).includes(propName)){
    for (const obj of products){
      propValues.push(obj[propName]);
    }
  }  
  return propValues;
  // Change code above this line
}
console.log('Object.keys(products[0]) :>> ', Object.keys(products[0]));
console.log('getAllPropValues :>> ', getAllPropValues("name"));