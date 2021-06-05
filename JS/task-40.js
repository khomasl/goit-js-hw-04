// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
const atTheOldToad = {
    potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
    updatePotionName(oldName, newName) {
      // Change code below this line
      this.potions.splice(this.potions.indexOf(oldName), 1, newName);
     
      // Change code above this line
    },
  };
  