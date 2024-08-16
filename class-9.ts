// MAKE YOUR OWN TYPE USING TYPE ALIAS

type Student = {
    name:string,
    rollnumber:number
}

// CREATE MULTIPLE OBJECT IN ONE ARRAY

let students : Student[] = [
    {name:"ayesha",rollnumber:123},
    {name:"misbah",rollnumber:321},
    {name:"madni",rollnumber:456},
    {name:"kashf",rollnumber:654}
]

//TO PRINT STUDENT NAME KASHF
console.log(students[3].name); //kashf

// -----------------
// SLICE AND SPLICE ARRAY METHOD
// -----------------

// CREATING AN ARRAY
let fruits = ['apple','mango','banana','graps']

// USING SLICE METHOD (slice method does not afect orignal array . it create a duplicate array )
let duplicateFruit = fruits.slice()
duplicateFruit.pop()
console.log(duplicateFruit); //it will print ['apple','mango','banana']

let duplicateFruit_1 = fruits.splice(1,2) //it remove element of index 1 to 2 == 'apple'
duplicateFruit_1.pop() //it remove last element but it contains only one element so it should print empty array
console.log(duplicateFruit); //it will print ['apple','guava','graps']


// ----------------
// USING SPLICE METHOD (splice method affect the orignal array )
// ----------------

fruits.splice(1,2,"guava") //it remove from index number 1 and removes 2 element (included index number 1) and add guava at index number 1
console.log(fruits); //it will print ['apple','guava','graps']

// to remove apple and add orange at the place of apple
let fruit_1 : string[] =['mango','apple','banana','kiwi']
fruit_1.splice(1,1,"orange")
console.log(fruit_1);

// to add graps and lychee before banana
fruit_1.splice(2,0,"graps","lychee")
console.log(fruit_1);

// to remove mango and banana and add orange at the place of banana
let fruit_2 : string[] = ["mango","apple","banana","kiwi"]
fruit_2.shift();
fruit_2.splice(1,1,"orange")
console.log(fruit_2);

// ----------------
// TUPLES
// ----------------

// basically tuples are just like parameter
// they are used to define type of each element (index of tuples and index of element matters )
let fruit_3 : [string,string,string,string] = ["orange","guava","graps","apple"]

// ----------------
// LOOPS
// ----------------

// For loop 
// variable          condition    control
for (let i = 0 ;     i<=0 ;       i++) // when for loop start it checks the condition . if condition is true 
// it will print Hello Ayesha
    {console.log("Hello Ayesha");}
//  to print number 1 to 10 use ...
    for (let i = 0 ; i <= 10 ; i++){
        console.log(i);
    }
// to print countdown 10 to 0 
    for (let i = 10; i >= 10; i-- ){
        console.log(i);
    }

// to use for loop with array..
let favouriteFruits = ["mango" , "banana" , "dates" , "lychee"]

for (let i = 0; i < favouriteFruits.length; i++) {
    console.log(favouriteFruits[i]);
}