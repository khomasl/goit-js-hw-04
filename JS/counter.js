const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
};

const decrementButton = document.querySelector('.js-decrement');
const incrementButton = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');
//valueEl.textContent = 
decrementButton.addEventListener('click', function() {
  counter.decrement(); 
  valueEl.textContent = counter.value;
}); 

incrementButton.addEventListener('click', function() {
    counter.increment(); 
    valueEl.textContent = counter.value;
  });