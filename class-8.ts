// (Object)

let examSheet = {
    name:"Ayesha Shanzay Khan",
    rollNumber:1234,
    subject:"English"
}

console.log(examSheet);

// Ans: {name:'Ayesha Shanzay Khan',
//       rollNumber:1234, subject:'English'}

/*  --- Example --- 

let examSheet {
     property   <=   name:  'ayesha'
               ||      ||  
               \/      \/
               Key    Value
  }
*/


let examSheet1 = {
    name:"Ayesha Shanzay Khan",
    rollNumber:1234,
    subject:"English"
}

console.log(examSheet1.name);
 
// Ans: Ayesha Shanzay Khan

let examSheet2 = {
    name:"ayesha",
    rollNumber:1234,
    subject:"English"
}

console.log(`${examSheet2.name} , ${examSheet2.rollNumber}`);

// Ans: ayesha , 1234

let car = {
    name:"Civic",
    color:"Red",
    model:"2020",
    company:"Honda"
}

console.log(car.name);

// Ans: 'Civic'

let user1 = {
    nama:"ayesha",
    role:"student",
    age:14,
}

console.log(user1["nama"]);

// Ans: 'ayesha'

// ------- Example ---------

/*
let user1 : {          ____
    name:string,           |      
    role:string,           |    => Variable type declear               
    age:number         ____|    => Data type
} = {                 _____
    name:"Ayesha",         |
    role:"Student",        |===>(value)
    age:14,           _____|      
}                   
*/

// (Type Alias)

type User = {
    name:string,
    role:string,
    age:number,
}

const user2 : User = {
    name:"Ayesha",
    role:"Student",
    age:14
}

// Nested (Object)

type User1 = {
    name:string,
    role:string,
    age:number,
    childern:{
        name:string,
        age:number
    } 
}

let user3 : User1 = {
    name:"Rukhsana",
    role:"mother",
    age:45,
    childern : {
        name:"Ayesha",
        age:14
    }
}

console.log(user3.childern.name);

// Ans: 'Ayesha'

// Type Literals

let traficLight : "red" = "red"  // <= its called type literals

// Union type (|)

let traficLight1 : "red" | "yellow" | "green" = "red"

// aik sy zayda type ko assign krna ko union kaha ta ha (|)

let drink : "lassi" | "coffe" | "water" | "juice" = "water"

console.log(drink);

// Ans : 'water'

// Intersection type (&)

// Aik sy zayda type ko object ma assign krna ko intersection krta ha 
// type teacher : {
//  name:string,
//  exp:number
//  } 
//


type student = {
    name:string,
    rollNumber:number,
}
