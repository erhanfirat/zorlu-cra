import { useEffect, useState } from "react";
import { Button } from "./Button";

let sayac = 1;

export const Counter = ({ hide = false, counterInitial = 0, saveSayac }) => {
  // STATES
  const [count, setCount] = useState(counterInitial);

  const [user, setUser] = useState({ name: "", email: "" });

  // METHODS

  const arttir = () => {
    // console.log("count ", count);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    setCount((prevValue) => prevValue + 1);
    // console.log("count ", count);
  };

  const azalt = () => {
    setCount(count - 1);
  };

  const sayacArttir = () => {
    sayac++;
    // console.log("sayac: ", sayac);
  };

  // USE EFFECTS

  useEffect(() => {
    // component did mount!
    console.warn("**** COUNTER COM. DID MOUNT!");
    return () => {
      // component will unmount!
      console.warn("**** COUNTER COM. WILL UNMOUNT!");
      // prompt("Sepete eklediğiniz yumurta sayısını kaydetmemi ister misiniz?");
    };
  }, []);

  useEffect(() => {
    // t1'de tetiklenir
    // Count değişti, ve güncel değerinde
    console.log(`count ${count} değerine güncellendi!`);

    if (saveSayac) {
      saveSayac(count);
    }

    return () => {
      // t2 de tetiklenir
      // Count değişecek ve eski değerinde şu an
      console.log(`count ${count} değerinde ve değişmek üzere!`);
    };
  }, [count]);

  useEffect(() => {
    // component did update!
    // console.warn("**** COUNTER COM. DID UPDATE!");
  }); // ikinci parametre olarak tüm state ve propları yazarsam did update için çalışır

  // RETURN JSX

  return (
    <div className={`counter ${hide ? "hidden" : ""}`}>
      Counter: {count}
      <div>
        <Button onClick={arttir} title="Sayaç değerini 3 arttır">
          Arttır
        </Button>
        <Button
          id="azalt-btn"
          className="orange"
          onClick={azalt}
          title="Sayaç değerini 1 azalt"
        >
          Azalt
        </Button>
      </div>
      {/* <br />
      Count 2: {count2}
      <div>
        <Button className="btn" onClick={() => setCount2(count2 + 1)}>
          Arttır
        </Button>
        <Button className="btn" onClick={() => setCount2(count2 - 1)}>
          Azalt
        </Button>
      </div> */}
    </div>
  );
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "PLUS":
      return state + action.payload;
    default:
      return state;
  }
};

let sayac1 = countReducer(0, { type: "INCREASE" });
console.log("sayac1 > ", sayac1); // 1

sayac1 = countReducer(sayac1, { type: "PLUS", payload: 5 });
console.log("sayac1 > ", sayac1); // 6
