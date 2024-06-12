import { useEffect, useReducer, useState } from "react";
import { Button } from "./Button";

let sayac = 1;

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "PLUS":
      if (!isNaN(action.payload)) {
        return state + action.payload;
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const CounterWithReducer = ({ hide = false }) => {
  // STATES
  const [count, dispatchCount] = useReducer(countReducer, 0);

  // METHODS

  const arttir = () => {
    // console.log("count ", count);
    dispatchCount({ type: "INCREASE" });

    // console.log("count ", count);
  };

  const azalt = () => {
    dispatchCount({ type: "DECREASE" });
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
    </div>
  );
};
