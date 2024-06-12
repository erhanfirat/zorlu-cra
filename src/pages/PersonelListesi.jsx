import { useReducer } from "react";
import { Button } from "../components/Button";

const personelListData = [
  { id: 1, name: "Ali", surname: "Baş", email: "a@a.com" },
  { id: 2, name: "Fatma", surname: "Kaz", email: "a@a.com" },
  { id: 3, name: "Ece", surname: "Kaş", email: "a@a.com" },
  { id: 4, name: "Ahmet", surname: "Türk", email: "a@a.com" },
  { id: 5, name: "Zeynep", surname: "Kiraz", email: "a@a.com" },
  { id: 6, name: "Furkan", surname: "Bal", email: "a@a.com" },
];

const personelReducer = (state, action) => {
  switch (action.type) {
    case "PRODUCT_DELETE":
      return state.filter((personel) => personel.id !== action.payload);

    default:
      return state;
  }
};

export const PersonelListesi = () => {
  const [personelList, dispatchPersonelList] = useReducer(
    personelReducer,
    personelListData
  );

  return (
    <div>
      <h2>Personel Listesi</h2>
      <hr />
      <ul>
        {personelList.map((personel) => (
          <li>
            {personel.name} {personel.surname}{" "}
            <Button
              onClick={() =>
                dispatchPersonelList({
                  type: "PRODUCT_DELETE",
                  payload: personel.name,
                })
              }
            >
              Sil
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
