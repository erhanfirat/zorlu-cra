import axios from "axios";
import { productReducerAcions } from "../reducers/productReducer";

export const setProductsActionCreator = (productList) => ({
  type: productReducerAcions.setProducts,
  payload: productList,
});

export const setTotalActionCreator = (total) => ({
  type: productReducerAcions.setTotal,
  payload: total,
});

export const setOffsetActionCreator = (offset) => ({
  type: productReducerAcions.setOffset,
  payload: offset,
});

export const setLimitActionCreator = (limit) => ({
  type: productReducerAcions.setLimit,
  payload: limit,
});

export const setPageActionCreator = (page) => ({
  type: productReducerAcions.setPage,
  payload: page,
});

export const fetchedProductsAction = (page, limit) => (dispatch, getState) => {
  const fetchedProducts = getState().product.fetchedProducts;

  if (fetchedProducts[`${page}-${limit}`]) {
    dispatch(setProductsActionCreator(fetchedProducts[`${page}-${limit}`]));
  } else {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products", {
        params: {
          limit: limit,
          offset: limit * page,
        },
      })
      .then((res) => {
        dispatch(setProductsActionCreator(res.data.products));
        dispatch(setTotalActionCreator(res.data.total));
        dispatch(setPageActionCreator(page));
        dispatch(setLimitActionCreator(limit));
      })
      .catch()
      .finally();
  }
};
