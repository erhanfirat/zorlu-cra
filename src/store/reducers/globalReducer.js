
const globalReducerInitial = {
  user: null,
  sayac: 15,
  title: "MyReact App"
};

export const globalReducerActions = Object.freeze({
  setSayac: "GLOBAL_SET_SAYAC",
  setTitle: "GLOBAL_SET_TITLE",
});

export const globalReducer = (state = globalReducerInitial, action) => {
  const { type, payload } = action;

  switch (type) {
    case globalReducerActions.setSayac:
      return { ...state, sayac: payload };

    case globalReducerActions.setTitle:
      return { ...state, title: payload };

    default:
      return state;
  }
};
