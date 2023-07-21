export const initialState = {
  PersonContext: {
    name: "",
    password: "",
    isLogged: false,
    type: null,
    test: "prova",
    branches: [],
    loginPoupup: false,
  },
  products: [],
  visualCondition: {
    deleteProductCondition: false,
    editBranchCondition: false,
    addProductCondition: false,
  },
  // optional -> visualCondition
};
