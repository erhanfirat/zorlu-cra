export const myLogger = (store) => (next) => (action) => {
  console.log("[myLogger-middleware] Şimdiki state:", store.getState());
  console.log("[myLogger-middleware] Şu aksiyon dispatch edilecek:", action);

  const result = next(action);
  console.log("[myLogger-middleware] Sonraki state:", store.getState());

  // localStorage.setItem(key, JSON.stringify(store.getState()))
  return result;
};
