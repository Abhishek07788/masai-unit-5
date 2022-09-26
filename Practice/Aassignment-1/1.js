let num = process.argv.slice(2)
console.log(num)
let r=0;
for(let i = 0; i<num.length; i++){
    r+= +num[i]
}

console.log(r)