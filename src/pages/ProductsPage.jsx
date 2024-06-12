import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchedProductsAction,
  setLimitActionCreator,
  setPageActionCreator,
  setProductsActionCreator,
  setTotalActionCreator,
} from "../store/actions/productActions";

export const ProductsPage = () => {
  const dispatch = useDispatch();
  const [pages, setPages] = useState([]);
  const { list, total, page, limit, fetchedProducts } = useSelector(
    (store) => store.product
  );

  const pageCountCalculate = () => {
    // todo: page count hesapla
    setPages(Array.from(Array(parseInt(total / limit)).keys()));
  };

  const fetchProducts = () => {
    dispatch(fetchedProductsAction(page, limit));
  };

  useEffect(pageCountCalculate, [limit, total]);

  useEffect(() => {
    fetchProducts();
  }, [page, limit]);

  const pagesMap = pages.map((p) => (
    <option value={p} key={p}>
      {p + 1}
    </option>
  ));
  const pagesMap2 = [
    <option value={0}>1</option>,
    <option value={1}>2</option>,
    <option value={2}>3</option>,
  ];
  console.log("pagesMap: ", pagesMap);

  const pagesForeach = pages.forEach((p) => (
    <option value={p} key={p}>
      {p + 1}
    </option>
  ));
  console.log("pagesForeach: ", pagesForeach);

  return (
    <div>
      <h2>Ürünler Sayfası | Sayfa: {page}</h2>
      <hr />
      <div>
        <div>
          <label>
            Sayfa:
            <select
              value={page}
              onChange={(e) => dispatch(setPageActionCreator(e.target.value))}
            >
              {pagesMap}
            </select>
          </label>
        </div>
        <div>
          <label>
            Limit:
            <select
              value={limit}
              onChange={(e) => dispatch(setLimitActionCreator(e.target.value))}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={40}>40</option>
            </select>
          </label>
        </div>
      </div>
      <div className="products-container">
        {list.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
