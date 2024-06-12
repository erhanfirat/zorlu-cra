import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setPageActionCreator } from "../store/actions/productActions";
import { useQuery } from "@tanstack/react-query";

// https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products
// products with CRUD

export const ProductsPageTanStack = () => {
  const [limit, setLimit] = useState(20);
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState(0);

  const {
    data: { total, products } = { total: 0, products: [] },
    error,
    isPending,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () =>
      axios
        .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products", {
          params: {
            limit: limit,
            offset: limit * page,
          },
        })
        .then((res) => res.data),
  });

  const pageCountCalculate = () => {
    // todo: page count hesapla
    setPages(Array.from(Array(parseInt(total / limit)).keys()));
  };

  useEffect(pageCountCalculate, [limit, total]);

  const pagesMap = pages.map((p) => (
    <option value={p} key={p}>
      {p + 1}
    </option>
  ));

  return (
    <div>
      <h2>Ürünler Sayfası | Sayfa: {page}</h2>
      <hr />
      <div>
        <div>
          <label>
            Sayfa:
            <select value={page} onChange={(e) => setPage(e.target.value)}>
              {pagesMap}
            </select>
          </label>
        </div>
        <div>
          <label>
            Limit:
            <select value={limit} onChange={(e) => setLimit(e.target.value)}>
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
            </select>
          </label>
        </div>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
