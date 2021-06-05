// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// const atTheOldToad = {
//     potions: [
//       { name: 'Speed potion', price: 460 },
//       { name: 'Dragon breath', price: 780 },
//       { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },
//     addPotion(potionName) {
//       if (this.potions.includes(potionName)) {
//         return `Potion ${potionName} is already equipped!`;
//       }
      
//       this.potions.push(potionName);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
  
//       if (potionIndex === -1) {
//         return `Potion ${potionName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
  
//       if (potionIndex === -1) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
  
//       this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };

const atTheOldToad = {
    potions: [
      { name: 'Speed potion', price: 460 },
      { name: 'Dragon breath', price: 780 },
      { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      if (this.potions.includes(potionName)) {
        return `Potion ${potionName} is already equipped!`;
      }
      
      this.potions.push(potionName);
    },
    removePotion(potionName) {

        // console.log('potionName :>> ', potionName);  
        // const potionN = this.potions[1].name;
        // console.log('potion :>> ', potionN);
        // const potion = {
        //     name: potionName,
        //     price: 780
        // }; 

        let potionIndex = -1;
        const pts = this.potions;
        for (let i = 0; i<= pts.length; i += 1){
            if (pts[i].name === potionName){
                potionIndex = i;
                break;
            }
        }

        // console.log('potion :>> ', this.potions.includes({name: 'Dragon breath', price: 780}));
        // if (this.potions.includes({name: "Dragon breath", price: 780})) {
        //     console.log(`Potion ${potionName} есть`);
        //   }
        // const potionIndex = this.potions.indexOf(potionName);
        // console.log('potionIndex :>> ', potionIndex);
        
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
    //     const {
    //             name: name = oldName,
    //             price
    //         } = this.potions.keys();

    //   const potionIndex = this.potions.indexOf({name, price});
    let potionIndex = -1;
    const pts = this.potions;
    for (let i = 0; i<= pts.length; i += 1){
        if (pts[i].name === oldName){
            potionIndex = i;
            this.potions[i].name = newName;
            break;
        }
    }
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
  
     // this.potions.splice(potionIndex, 1, this.potions.newName);
    },
    // Change code above this line
  };

  //console.log('add :>> ', atTheOldToad.addPotion({ name: 'Speed potion', price: 460 }));
  console.log('remove :>> ', atTheOldToad.removePotion('Dragon breath'));
//   console.log('uppd', atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
  console.log('get :>> ', atTheOldToad.getPotions());
