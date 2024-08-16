
// console.log("First");


// setTimeout( () => {
//     console.log("Second");
// } , 0) //3000 min second

// console.log("Third");.

// let placeOrder =  (preparedPizzacb:any) => {
//     setTimeout(() => {
//          console.log("order is placed")
//          preparedPizzacb()
//     }, 2000);
// }
// // let order = placeOrder(); //order is placed
// // console.log(order);

// let preparedPizza =() => {
//     setTimeout(() => {
//         console.log("Pizza is ready");
//     }, 5000);
// }

// placeOrder(preparedPizza)



// type fn = () => void
// let placeOrder = (preparedPizzacb: fn ) => {
//     setTimeout(() => {
//         console.log("Order is placed");
//         preparedPizzacb()
//     }, 2000);
// }

// let preparedPizza = () => {
//     setTimeout(() => {
//         console.log("Pizza is ready");
//     }, 5000);
// }

// placeOrder(preparedPizza)

// ------------|
// Promises    |
// ------------|

// type Fn = () => void

// let placeOrder = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Order is placed");
//             resolve("") 
//         }, 3000);
//     })
// }

// let preparedPizza = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("pizza is ready");
//             resolve("")
//         }, 5000);
//     })
// }


// let delivery = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Delivery is succesful");
//             resolve("")
//             reject("hi")
//         }, 1000);
//     })
// }

// placeOrder().then(preparedPizza).then(delivery)

