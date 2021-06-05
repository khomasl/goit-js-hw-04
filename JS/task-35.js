// // Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент массива, и splice() для того чтобы заменить этот элемент
// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//       // Change code below this line
      
      
      
//       // Change code above this line
//     },
//   };

const bookShelf = {
    books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
    updateBook(oldName, newName) {
      // Change code below this line
      //const bookIndex = this.books.indexOf(oldName);
      //this.books.splice(bookIndex, 1, newName);
      //
      this.books.splice(this.books.indexOf(oldName), 1, newName);
      // Change code above this line
    },
  };