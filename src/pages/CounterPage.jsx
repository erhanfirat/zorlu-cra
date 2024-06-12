import { useState } from "react";
import { Counter } from "../components/Counter";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSayacActionCreator } from "../store/actions/globalActions";

export const CounterPage = () => {
  const [show, setShow] = useState(true);
  const counterInitial = useSelector((store) => store.global.sayac);
  const dispath = useDispatch();

  const saveSayac = (val) => {
    // todo: dispatch ile redux a gönder
    dispath(setSayacActionCreator(val));
  };

  return (
    <div>
      <h2 className="flex justify-between items-center">
        Organik Yumurta
        <Button onClick={() => setShow(!show)}>TOGGLE COUNTER</Button>
      </h2>
      <hr />
      {/* {show && <Counter />}
      <hr />*/}
      <Counter
        hide={!show}
        counterInitial={counterInitial}
        saveSayac={saveSayac}
      />
      {/* <CounterWithReducer /> */}
    </div>
  );
};
