let s = "Hello World";
let r = s.split('').reverse().join('');
console.log(r);

let t = "GLA University";
let v = "aeiouAEIOU";
let c = 0;
for (let i = 0; i < t.length; i++) {
    if (v.indexOf(t[i]) !== -1) {
        c++;
    }
}
console.log(c);
function p(x) {
    let y = x.split('').reverse().join('');
    return x === y;
}
console.log(p("hello"));
console.log(p("racecar"));

// let h = "hello world";
// let u = h.split('').reverse().toUpperCase().join('');
// console.log(u);

let h = "hello world";
let a = "";
let w = h.split(' ');
for(let i=0; i<w.length; i++) {
    a += w[i][0].toUpperCase();
}
console.log(a); 


let z = "aabbcccddee";
function f(q) {
    for (let i = 0; i < q.length; i++) {
        if (q.indexOf(q[i]) === q.lastIndexOf(q[i])) {
            return q[i];
        }
    }
    return null;
}
console.log(f(z));
