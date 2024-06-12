import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "./Button";

// key ve children ayrı prop olarak kullanılmamalı
export const ProductCard = ({ product }) => {
  return (
    <div className="product-card" key={product.id}>
      <img src={product.images[0].url} />
      <h3>{product.name}</h3>
      <p className="grow">{product.description}</p>
      <p className="price">{product.price}</p>
      <Link
        className="btn"
        to={`/products/detail/${product.name}/${product.id}`}
      >
        İncele
      </Link>
      <Button className="orange">Satın Al</Button>
    </div>
  );
};
