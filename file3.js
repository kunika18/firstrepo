let a= 100;
let b= 200;

a = a + b; // now a becomes 300;
b = a - b; // and b becomes 300-200= 100 (which was previously a)
a = a - b; // and a becomes 300-100= 200;

console.log(a); 
console.log(b); 
