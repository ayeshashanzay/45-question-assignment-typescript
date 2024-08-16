// (OBJECT ORIENTED PROGRAMMING)
 
// Example 1

// class House {
//     onwerName:string = "Ayesha";
//     address:string = "apt 109";
//     numberOfRooms:number = 8
// }

// let house1 = new House();
// let house2 = new House();
// let house3 = new House();

// console.log(house1);

// Example 2

// class House {
//     onwerName:string = "Ayesha";
//     address:string = "apt 109";
//     numberOfRooms:number = 8;
//     floorNumber:number = 4;
//     constructor (name:string){
//         this.onwerName = name
//     }
// }
    
// let house1 = new House("ali");
// let house2 = new House("madni");
// let house3 = new House("misbah");
    
// console.log(house1.onwerName); //ali 
// console.log(house2.onwerName); //madni 
// console.log(house3.onwerName); //misbah 


// Example 3

// class House {
//     onwerName:string = "Ayesha";
//     address:string = "apt 109";
//     numberOfRooms:number = 8;
//     floorNumber:number = 4;
//     constructor (name:string,address:string){
//         this.onwerName = name
//         this.address = address
//     }
// }

// let house1 = new House("ali","2344");
// let house2 = new House("madni","1233");
// let house3 = new House("misbah","122");
    
// console.log(house1.onwerName , house1.address); //ali , 2344
// console.log(house2.onwerName , house2.address); //madni ,1233
// console.log(house3.onwerName , house3.address); //misbah , 122

// Example 4

// class House {
//     onwerName:string = "Ayesha";
//     readonly  address:string = "apt 109";
//     numberOfRooms:number = 8;
//     floorNumber:number = 4;
//     constructor (name:string){
//         this.onwerName = name
//     }
// }

// let house1 = new House("ali");
// let house2 = new House("madni");
// let house3 = new House("misbah");
    
// console.log(house1.onwerName); //ali 
// console.log(house2.onwerName); //madni 
// console.log(house3.onwerName); //misbah 

// Example 5

// class House {
//     onwerName:string = "Ayesha";
//     readonly  address:string = "apt 109";
//     numberOfRooms:number = 8;
//     floorNumber:number = 4;
//     constructor (name:string){
//         this.onwerName = name
//     }
//     bell(){
//         console.log("Ding Dong");
//     }
// }
 
// let house1 = new House("ali");
// let house2 = new House("madni");
// let house3 = new House("misbah");
    
// house1.bell();
// house2.bell();

// Example 6 (common property use are bad practice)

// class Student1 {
//     name:string
//     age:number
//     rollNumber:number
//     constructor(name1:string,age1:number,rollNumber1:number){
//         this.name = name1
//         this.age = age1
//         this.rollNumber = rollNumber1
//     }
// }

// let student1 = new Student1("ayesha",14,123);
// console.log(student1.name); //ayesha


// class Teacher {
//     name:string
//     age:number
//     exp:number
//     constructor(name:string,age:number,exp:number){
//         this.name = name
//         this.age = age
//         this.exp = exp
//     }
// }

// let teacher1 = new Student1("ayesha",14,123);
// console.log(teacher1.name); //ayesha

//  Example 7 

// class Preson {
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
// }

// class Student1 extends Preson {
//     rollNumber:number
//     constructor(name:string,age:number,rollNumber:number){
//         super(name,age)
//         this.rollNumber = rollNumber
//     }
// }

// let student1 = new Student1("Ayesha",14,132)
// console.log(student1.rollNumber); //132

// class Teacher extends Preson {
//     exp:number
//     constructor(name:string,age:number,exp:number){
//         super(name,age)
//         this.exp = exp
//     }
// }

// let teacher1 = new Teacher("Ayesha",14,3)
// console.log(teacher1.exp);

// Example 8 


// class Preson {
//     name:string
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age
//     }
    
// }

// class Student1 extends Preson {
//     rollNumber:number
//     constructor(name:string,age:number,rollNumber:number){
//         super(name,age)
//         this.rollNumber = rollNumber
//     }
//     introduction(){
//         console.log(`My name${this.name} and i am ${this.age} year old and my roll number ${this.rollNumber} is `);
        
//     }
// }

// let student1 = new Student1("Ayesha",14,132)
// student1.introduction()

// class Teacher extends Preson {
//     exp:number
//     private salary:number
//     private secret = 1234
//     constructor(name:string,age:number,exp:number,salary:number){
//         super(name,age)
//         this.exp = exp
//         this.salary = salary
//     }
//     introduction(){
//         console.log(`My name${this.name} and i am ${this.age} year old and i have ${this.exp} year exp and my salary is ${this.salary} `);
        
//     }
//     // this.name = "Okasha" //Error
//     getsalary(secret:number){
//         if (secret == this.secret){
//             console.log(this.salary);
//                 console.log("Please enter a valid code");
//         } else {
//             console.log("Please enter a valid code");
//         }
// }
// }

// let teacher1 = new Teacher("Ayesha",14,3,50000)
// teacher1.introduction()   
// teacher1.getsalary(1234);

// interface IDraw {
//     draw():void
//     color():void    
// }

// class Circle implements IDraw {
//     draw(): void {
//         console.log("Drawing circle");
//     }
//     color(): void {
//         console.log("Coloring");
//     }
// }

// class Triangle implements IDraw {
//     draw(): void {
//         console.log("Drawing Triangle");
//     }
//     color(): void {
//         console.log("Red");
//     }
// }

// let myTuple = <any> {name:"zia",id:1}
// myTuple = {id:2,name:"tom"}
// myTuple = {id:3,name:"milk",gender:false}
// myTuple = {id:3,gender:false}

// let notSure : any = 4
// notSure = "May a string "
// notSure = false

// const enum Color {Red = 1 ,Green , Blue}

// console.log(Color[2]);


// var a : (...rest:string[],fname:string)=>string = 
// function (...restOFNAME:string[] , firstName:string){
//     return firstName + " " + restOFNAME.join(" ")
// }

// console.log(a("Zia","khan","U"));


// function a (x:{suit:string;card:number}[]):number
// function a (x:number):{suit:string;card:number}
// function a (x) : any {
//     if (typeof x == "object") {
//         var ai = Math.floor(Math.random() * x.length)
//         return ai
//     } else if (typeof x == "number") {
//         var ai = Math.floor(x/13)
//         return{suit:suits[ai],card x%13}
//     }
// }


// var a  = {name:number}
// var a1 = {name:1,a:2}
// a= a1

// 


// var a = f => {this.x = "x"}


// enum Color {
//   Red,
//   Green,
//   Blue
// }

// let color: Color = Color.Green;
// console.log(color);


let num : number =12
let str : string = "Hello"


let numType : typeof num;
let strType : typeof str;
 
numType = 123
strType = "1234"
console.log(numType);
console.log(strType);
