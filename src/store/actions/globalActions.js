import { globalReducerActions } from "../reducers/globalReducer";

export const setSayacActionCreator = (sayacValue) => ({
  type: globalReducerActions.setSayac,
  payload: sayacValue,
});

export const setTitleActionCreator = (newTitle) => ({
  type: globalReducerActions.setTitle,
  payload: newTitle,
});
