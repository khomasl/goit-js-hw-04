const a = {};
const b = {key: 'b'};
const c = {key: 'c'};
const d = [];

a[b] = 1;
a[c] = 2;
a[d] = 3;

console.log('a[b] :>> ', a[b]);

console.log('a :>> ', a);
console.log('b :>> ', b);
console.log('c :>> ', c);
console.log('d :>> ', d);
console.log('a[c] :>> ', a[c]);
console.log('a[d] :>> ', a[d]);
console.log('a[{}] :>> ', a[{}]);
