import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setPageActionCreator } from "../store/actions/productActions";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { queryClient } from "../main";

// https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products
// products with CRUD

export const ProductsPageTanStackCRUD = () => {
  const [product, setProduct] = useState(null);
  const {
    data: productList = [],
    error,
    isPending,
  } = useQuery({
    queryKey: ["productsCRUD"],
    queryFn: () =>
      axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
        .then((res) => res.data),
  });

  const productMutation = useMutation({
    mutationFn: (newProduct) =>
      axios.put(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" +
          newProduct.id,
        newProduct
      ),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productsCRUD"] });
      setProduct(null);
    },
  });

  const saveProduct = (e) => {
    e.preventDefault();
    // mutation tetiklenmeli
    productMutation.mutate(product);
  };

  return (
    <div>
      <h2>Ürünler Sayfası</h2>
      <hr />

      <div className="products-container">
        {!product &&
          productList.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={
                  product.img + "?random=" + Math.round(Math.random() * 9999999)
                }
              />
              <h3>{product.name}</h3>
              <p className="grow">{product.description}</p>
              <p className="price">{product.price}</p>
              <Button className="orange">Satın Al</Button>
              <Button className="orange" onClick={() => setProduct(product)}>
                Düzenle
              </Button>
            </div>
          ))}

        {product && (
          <form onSubmit={saveProduct}>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>
            <div>
              <Button type="submit">Kaydet</Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
