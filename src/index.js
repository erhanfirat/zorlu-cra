import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { myStore } from "./store/store.js";
import App from "./App.jsx";

import "./index.css";
import { MyContextProvider } from "./context/myContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={myStore}>
    <MyContextProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </MyContextProvider>
  </Provider>
);

class Employee {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

const ali = new Employee("Ali", "Baş");

// console.log("ali ", ali);

function greetUser(user) {
  // function scope
  var random = Math.round(Math.random() * 100);
  // console.log("Merhaba " + user.name);
}

// global scope

if (true) {
  // block scope: if, for, switch
  // let, const: block scope dışından erişilemez
  let random2 = Math.round(Math.random() * 100);
  // console.log("if içinde random2", random2);
}

// console.log("if dışında random2", random2);

// random2

// const pi = 3;
// // pi = 3.14; // ERROR!

// let userName = "ali";
// userName = "Anonim";

// AE12314
// const sayilar = [1, 2, 3, 4, 5, 6];

// const [ilk, ikinci, ...kalanlar] = sayilar;

// console.log("ilk: ", ilk);
// console.log("ikinci: ", ikinci);
// console.log("kalanlar: ", kalanlar);

// console.log("sayilar === sayilar2: ", sayilar === sayilar2);

// const sayilarKopya = sayilar;
// sayilarKopya.push(4);

// const sayilarGercekKopya = [...sayilar];
// sayilarGercekKopya.push(5);

// console.log(sayilar, sayilar === sayilarGercekKopya);

// const user = {
//   name: "ali",
//   email: "ali@a.com",
//   address: {
//     city: "Ankara",
//     postcode: "06333",
//   },
//   age: 19,
//   url: "http://aaa.com",
//   getName: function () {
//     console.log("Kullanıcı adı: ", this.name);
//   },
// };

// const user2 = {
//   name: "ahmet",
//   email: "ahmet@a.com",
//   address: {
//     city: "Ankara",
//     postcode: "06333",
//   },
//   age: 40,
//   url: "http://aaa.com",
//   getName: function () {
//     console.log("this: ", this);
//     this == user2;
//   },
//   getNameArrow: () => {
//     console.log("this: ", this);
//   },
// };

// user2.getName();
// user2.getNameArrow();

// const nameArrow = () => {
//   console.log("this: ", this);
// };

// nameArrow();

// const userCopy = { ...user, address: { ...user.address } };

// userCopy.address.city = "Antalya";

// const addressField = "address";
// const cityField = "city";

// // (user["address"]["city"] === user[addressField][cityField]) ===
// //   userCopy.address.city;

// const userKeys = Object.keys(user);
// console.log("userKeys: ", userKeys);

// for (let i = 0; i < userKeys.length; i++) {
//   console.log("user " + userKeys[i], user[userKeys[i]]);
// }

// const nameFn = "getName";
// user[nameFn]();

// // const name = user.name;
// // const email = user.email;
// // const city = user.address.city;

// // Desctructuring

// const {
//   name,
//   email,
//   address: { city },
//   ...rest
// } = user;

// // console.log(rest);

// function getName() {
//   //
// }

// // variable assignment
// const getName2 = function () {
//   // anonim
// };

// // arrow (=>) function
// const getName3 = () => {
//   // anonim
// };

// const karesi = (sayi) => {
//   return sayi * sayi;
// };

// const karesiShort = (sayi) => sayi * sayi;
// const karesiShortest = (s) => s * s;

// const greet = 'Atatürk demiş ki:\n "Hayatta en hakiki mürşit ilimdir!"' + "!";
// const greet2 = "Atatürk demiş ki:\n 'Hayatta en hakiki mürşit ilimdir!'";

// // Backtick ``

// const samsun = 1919;

// const greet3 = `Atatürk
// ${samsun} yılında Samsuna a ayak bastı!
// ve dedi ki:
//                  "Hayatta en hakiki mürşit ilimdir!"
// `;

// console.log(greet3);

// // Ternary Operator
// const userName = "";
// const name = userName ? userName : "Anonim";
// const name2 = userName || "Anonim";

// console.log(`Merhaba ${name2}`);

// // nullish

// const user = null;
// console.log(user?.name);

// console.log("Uygulama ayağa kalktı!");

// // Promise ve Async Await

// setTimeout(() => {
//   console.log("1");
// }, 0);

// // XML HTTP REQUESTS

// console.log("2");

// const p = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const sayi = Math.round(Math.random());
//       if (sayi === 0) {
//         resolve("Yazı");
//       } else {
//         reject("Tura");
//       }
//     }, 3000);
//   })
//     .then((res) => {
//       console.log(res);
//       // return undefined;
//       return res + " kazandınız";
//     })
//     .catch((err) => {
//       throw err + " kaybettiniz...";
//     });

// // p()
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.error(err);
// //   })
// //   .finally(() => {
// //     // tetiklenir
// //   });

// const paraFirlat = async () => {
//   // burada await kullanabilirim
//   try {
//     const res = await p();
//     console.log("paraFirlat içindeki res: ", res);
//   } catch (err) {
//     console.error("paraFirlat içindeki err: ", err);
//   }
// };

// paraFirlat();
