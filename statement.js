var i = 0;
let j = 0; 
const k = 0;

if (i == 0) {
    let l = 0; // ブロックスコープ
    i++;
    j++;
}

console.log(i.toString());
console.log(j.toString());

try {
    console.log(l.toString()); // ブロックスコープ
} catch (ex) {
    console.error(ex.message);
}

try {
    k++; // 定数
} catch (ex) {
    console.error(ex.message);
}