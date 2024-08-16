// @~Hamzah Syed  todays class
// // ۔۔۔۔۔۔۔۔۔۔Synchronous Code۔۔۔۔۔۔۔۔۔۔۔۔
// // execute line by line

// console.log("First");
// console.log("Second");
// console.log("Third");

// // ۔۔۔۔۔۔۔۔۔۔۔Asynchronous Code..........
// // execute parallel
// console.log("First");
// // we use setTimeout to create delay
// setTimeout(() => {
//   console.log("Second");
// }, 3000);

// console.log("Third");

// // .........self learning important topics about async.......
// // call stack
// // heap
// // event queue
// // event loop

// ..............Callback functions....................

// let placeOrder = () => {
//   return "Order is placed";
// };

// let order = placeOrder();

// console.log(order); // output order is placed

// let placeOrder = () => {
//   setTimeout(() => {
//     return "Order is placed"; // no output
//   }, 2000);
// };

// let order = placeOrder();

// console.log(order); // output undefined

// let placeOrder = () => {
//   setTimeout(() => {
//     console.log("Order is placed");
//   }, 2000);
// };

// placeOrder(); // output after 2 seconds output Order is placed

// let placeOrder = (preparePizzaCB: () => void) => {
//   setTimeout(() => {
//     console.log("Order is placed");
//     preparePizzaCB();
//   }, 2000);
// };

// let preparePizza = () => {
//   setTimeout(() => {
//     console.log("Pizza is prepared...");
//   }, 5000);
// };
// // pass funciton as a argument called callback
// placeOrder(preparePizza);
// // output after 2 seconds Order is placed
// // output after 5 seconds pizza is prepared...

// // ..............Promisses.....................

// let placeOrder = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("shop is open");

//       let isOpen = true;
//       if (isOpen) {
//         console.log("Order is placed");
//         resolve("");
//       } else {
//         reject("close");
//       }
//     });
//   });
// };

// let preparePizza = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Pizza is prepared");
//       resolve("");
//     }, 5000);
//   });
// };

// let eatPizza = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Pizza is finished");
//       resolve("");
//     }, 6000);
//   });
// };

// placeOrder()
//   .then(preparePizza) // resolve()
//   .then(eatPizza) // resolve()
//   .catch((reject) => {
//     // reject()
//     console.log("shop is closed");
//   });

// ........ self lerning................
// .......async javascript help desk from sir hamza channel link share in group.......

// //..............async await....................

// let placeOrder = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("shop is open");

//       let isOpen = true;
//       if (isOpen) {
//         console.log("Order is placed");
//         resolve("");
//       } else {
//         reject("close");
//       }
//     });
//   });
// };

// let preparePizza = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Pizza is prepared");
//       resolve("");
//     }, 5000);
//   });
// };

// let eatPizza = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Pizza is finished");
//       resolve("");
//     }, 3000);
//   });
// };

// let doTask = async () => {
//   await placeOrder();
//   await preparePizza();
//   await eatPizza();
// };

// doTask()


 

