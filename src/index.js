import observe from './core/observe';

const obj = { a: { m: { n: 1 } }, b: 2, c: [1, 2, 3] };

// console.log(obj.a);

observe(obj);
// console.log(obj);
// obj.a.m.n++;

obj.c.push(4);
console.log('obj.c: ', obj.c);
