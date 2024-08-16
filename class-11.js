"use strict";
// Type Any
// let age : any;
// // age = "18";
// // age = 18;
// // age = true;
// // age = [];
// // age = () => {}
// let num1 : any;
// let num2 : number = 18;
// num1 = num2;
// Type unkonwn
// let num1 : unknown;
// // num1.toFixed() //Error
// let num2 : number = 18
// // num1 =  num2 //No Error
// // num2 = num1 // Error
// let num1 : unknown;
// let num2 : unknown = 18;
// num2 = num1
// console.log(num2); //undefined
// let num1 : unknown;
// num1 = 18;
// num1.toFixed(); //Error
// EXplicit typecasting jab ap aik type define ki ha or phir is change krna ha to hum explicit type casting krta ha 
// let num1 : unknown;
// num1 = 18;
// console.log((num1 as number).toFixed(2)) //18.00d
// let num1 : string;
// num1 = "18";
// // (num1 as number) //Error
// // (<number>num1).toFixed(2)
// let val = num1 as unknown as number
// console.log(val);
// Rest parameter (agr ap ko aik se zada paremeter diyna ha tu ap rest parameter use kr sakta ha)
// function invite(frnds:string[]) {
//     return frnds
// }
// console.log(invite(["ayesha","misbah","madni"])); //[ 'ayesha', 'misbah', 'madni' ]
// function invite(...frnds:string[]) {
//     return frnds
// }
// console.log(invite("ayesha","misbah","madni")); //[ 'ayesha', 'misbah', 'madni' ]
// function invite(host:string , ...frnds:string[]) {
//     console.log(host);
//     console.log(frnds); 
// }
// console.log(invite( "kashf" ,"ayesha","misbah","madni")); //['kashf','ayesha', 'misbah', 'madni' ]
// function invite(host:string , ...frnds:string[]) {
//     console.log(`Welcome ${host} , ${frnds} `);
// }
// invite("misbah","madni","ayesha") // Welcome misbah ,madni,ayesha 
// function invite(...frnds:string[]) {
//     console.log(`Welcome ${frnds.join(" | ")}`)
// }
// invite("ayesha","misbah","madni") // Welcome ayesha | misbah | madni
// Function overloading
// advantage 
// (function overload is liye use hota ha different parameter type use krna k liya)
// ( ap ko aik type write krna ha )       
// (ap retune ko bhi type diya to error nahi ay ta)
// example:
// (function add(a:string,b:string) : string;)
// (function add(a:number,b:number) : number;)
// (function add(a:string,b:number) : any;) 
// function add(a:number,b:number) : number;
// function add(a:string,b:string) : string;
// function add(a:any,b:any) : any {
//     return a + b
// }
// add("humzah" , "syed")
//ayesha
// function google(email:string | number , password:string | number) : void
// function google(email:string) : void ; 
// function google(email:any, password?:any) :void {
//     console.log(`welcome to your google account `);
// } 
// google("ayesha","khan")
//sir
// function login(eamil:string,password?:any) : void ;
// function login(email:string) : void;
// function login(eamil:any,password?:any) :void {
//     console.log("You're login");
//     if (!password ) {
//         console.log("login with google");
//     } else {     
//         console.log("login with password");
//     }
// }
// login("ayesha@gmail.com","123456789")
// enums (condition k liye use hota ha)
// 
// index number change example 
// enum Colour {
//      Red , // 2
//      Green = 4, //4
//      Yellow, //5
// }
// enum Colour {
//     Red , //0
//     Green, //1
//     Yellow, //2
// }
//{ const enum Colour {
//     Red , //0
//     Green, //1
//     Yellow, //2
// }
// console.log(Colour[0]); //Red      //Error  }                                                                                                                                                                                                                                                                                                                                                   
// console.log(Colour.Red); //0 index number  
// console.log(Colour["Red"]); //0 index number
// console.log(Colour[0]); //Red                                                                                                                                                                                                                                                                                                                                                           
// let trafficLight :Colour = Colour.Red;
// if (trafficLight === Colour.Red) {
//     console.log("Stop");
// }
