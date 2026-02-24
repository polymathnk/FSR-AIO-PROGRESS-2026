console.log(10 > 20 && 30 > 15);
console.log(10 > 20 || 24 > 12);

//  && - will return the first falsy value ot the last value

let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

//  Pracical Usage in react jsx pages
const posts = ['Post one', 'Post two']
posts.length > 0 && console.log(posts[0]);

//  || - will return first truthy value or the last value
let b ;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined

console.log(b);

//  - ?? - return the right side operand whether the left one is either  null or undefined

let c;
c = 10 ?? 30;
c = null ?? 40;
c = undefined ?? 50;

console.log(c);