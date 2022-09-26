let num = process.argv.slice(2)
//let [x , y] = num.trim().split(" ").map(Number);
//console.log(x,y)
let r=0;
for(let i = 0; i<num.length; i++){
    r+= +num[i]
}

console.log(r)


 
