const productsInitial = {
  list: [],
  total: 0,
  offset: 0,
  limit: 20,
  page: 0,
  fetchedProducts: {
    // "0-20": [],
    // "1-20": [],
  },
};

export const productReducerAcions = Object.freeze({
  setProducts: "PRODUCT_SET_PRODUCTS",
  setTotal: "PRODUCT_SET_TOTAL",
  setOffset: "PRODUCT_SET_OFFSET",
  setLimit: "PRODUCT_SET_LIMIT",
  setPage: "PRODUCT_SET_PAGE",
});

export const productReducer = (state = productsInitial, action) => {
  const { type, payload } = action;
  switch (type) {
    case productReducerAcions.setProducts:
      return {
        ...state,
        list: payload,
        fetchedProducts: {
          ...state.fetchedProducts,
          [`${state.page}-${state.limit}`]: payload,
        },
      };

    case productReducerAcions.setTotal:
      return { ...state, total: payload };

    case productReducerAcions.setOffset:
      return { ...state, offset: payload };

    case productReducerAcions.setLimit:
      return { ...state, limit: payload };

    case productReducerAcions.setPage:
      return { ...state, page: payload };

    default:
      return state;
  }
};
