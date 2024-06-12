import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../api/api";
import { Button } from "../components/Button";

export const ProductDetailPage = () => {
  const [product, setProduct] = useState({});
  const { productName, productId } = useParams();
  const history = useHistory();

  console.log("productName, productId >>>> ", productName, productId);

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    API.get("/products/" + productId).then((res) => setProduct(res.data));
  }, [productId]);

  return (
    <div>
      <h2>
        <Button onClick={goBack}>{"<"}</Button> Detail: {product.name}
      </h2>
      <hr />
      <img src={product.images && product.images[0]?.url} />
      <p className="">{product.description}</p>
      <p className="">{product.price}</p>
    </div>
  );
};
