let a: number = 1;
let b: string = "abc"
let c:boolean = true;
let d:null = null;

let e: undefined;
let f1: number[] = [1,2,3,4];
let f2: Array<number> = [1,2,3,4];

let g1: string[] = ["gfdghd","gfdfdg","fdffdfg","ddaa"];

let g2: Array<string> = ["gfdghd",b,"fdffdfg","ddaa"];

let g3: Array <string | number> = ["sdff", 1,4,54, "eeeeheg"];
let g4: Array <string | number | boolean | Array <number> > = ["sdff", 1,4,54, "eeeeheg", true];


//{} // what is the key
let h1: {
    loading: boolean;
    error: boolean;
    data: [];
} = {
    loading: true,
    error: true,
    data:[],
};


// Record // datatype of values is same
let h2: Record <string, boolean> = {
    loasing: true,
    error: true
}

// arr and obj
let i1: {}[] = [
    { }
]

// arr and obj
let i2: Array < {
    name: string;
    age:number;
    place:string;
}> = [
    {name: "Abhi", age:20, place:"Kasganj"}
]


//function 
const add1 = (a:number, b:number) =>{
    return a + b;
};

add1(1,3)


//No need to return function 
const add2 = (a:number, b:number):void =>{
    console.log(a + b);
};

add2(1,3)


//matrix
let j: Array<number[]> = [
    [1, 2],
    [1, 4],
    [2, 7],
]

// Tuple
type j2 = [string, number, number?];

let j3: j2[] = [
    ["a",1],
    ["b",2, 4],
    ["b", 2 ]
] 


// Small Capital str
let country1: Array<"India" | "China"> = [
    "India",
    "China",
    // "ind",
    // "china"
]


type Country = "India" | "China"
let country2: Array<Country> = [
    "India",
    "China",
    // "ind",
    // "china"
]

// User data type
enum Gender {
    "Male",
    "Female",
}

type User = {
    name: string,
    age: number,
    email: string,
    // gender?: "Male" | "Female";
    gender?: Gender;
}

let Users: Array<User> = [
    {name:"A", age:15, email:"a@com", gender:Gender.Male},
    {name:"B", age:43, email:"b@com"},
]


// ---------- classes ---------
class Car {
    getTypes(){
        return 4; 
    }
    getEngine(){
        return "V8";
    }

    getEngineType(){
        return "Petrol";
    }
}

class Indica extends Car {    
    getEngineType(){
        return "electrical";
    }
}


let a1 = new Indica();
a1.getTypes(); // 4
a1.getEngineType(); //electrical