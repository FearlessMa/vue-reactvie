import observe from './core/observe'

const obj = { a: { m: { n: 1 } }, b: 2 };

// console.log(obj.a);


observe(obj);
console.log(obj);
obj.a.m.n++;
