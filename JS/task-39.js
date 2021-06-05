// Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.

const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
      // Change code below this line
       this.potions.splice(this.potions.indexOf(potionName), 1);
     // Change code above this line
    },
  };
  