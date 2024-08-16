"use strict";
// (Object)
let examSheet = {
    name: "Ayesha Shanzay Khan",
    rollNumber: 1234,
    subject: "English"
};
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
    name: "Ayesha Shanzay Khan",
    rollNumber: 1234,
    subject: "English"
};
console.log(examSheet1.name);
// Ans: Ayesha Shanzay Khan
let examSheet2 = {
    name: "ayesha",
    rollNumber: 1234,
    subject: "English"
};
console.log(`${examSheet2.name} , ${examSheet2.rollNumber}`);
// Ans: ayesha , 1234
let car = {
    name: "Civic",
    color: "Red",
    model: "2020",
    company: "Honda"
};
console.log(car.name);
// Ans: 'Civic'
let user1 = {
    nama: "ayesha",
    role: "student",
    age: 14,
};
console.log(user1["nama"]);
const user2 = {
    name: "Ayesha",
    role: "Student",
    age: 14
};
let user3 = {
    name: "Rukhsana",
    role: "mother",
    age: 45,
    childern: {
        name: "Ayesha",
        age: 14
    }
};
console.log(user3.childern.name);
// Ans: 'Ayesha'
// Type Literals
let traficLight = "red"; // <= its called type literals
// Union type (|)
let traficLight1 = "red";
// aik sy zayda type ko assign krna ko union kaha ta ha (|)
let drink = "water";
console.log(drink);
