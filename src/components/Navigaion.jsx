import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const sayac = useSelector((s) => s.global.sayac);

  return (
    <nav>
      <Link to="/">Ana Sayfa</Link>
      <Link to="/products">Ürünler</Link>
      <Link to="/counter">Sayaç [{sayac}]</Link>
      <Link to="/personel">Personel</Link>
    </nav>
  );
};
