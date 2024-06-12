import { Counter } from "../components/Counter";

export const HomePage = () => {
  return (
    <div>
      <h2>Ana Sayfa</h2>
      <hr />
      <p>
        Sayfama hoş geldiniz.
        <button className="btn w-[278px] bg-[#34EEAC] p-[.3rem]">
          Devamını oku ...
        </button>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat facere
        ut ipsa eos optio, doloribus expedita officiis nostrum labore doloremque
        quam molestiae et eius adipisci error provident commodi, architecto non!
        <button className="btn">Devamını oku ...</button>
      </p>
    </div>
  );
};
