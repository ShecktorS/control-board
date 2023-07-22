const admin = { name: "admin", password: "admin" };
const user = { name: "user", password: "user" };

export const mainReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_ADMIN":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          isLogged: true,
          type: admin.name,
          name: admin.name,
        },
      };

    case "LOGIN_USER":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          isLogged: true,
          type: user.name,
          name: user.name,
        },
      };
    case "SHOW_LOGIN_POUPUP":
      return {
        ...state,
        PersonContext: { ...state.PersonContext, loginPoupup: true },
      };
    case "HIDE_LOGIN_POUPUP":
      return {
        ...state,
        PersonContext: { ...state.PersonContext, loginPoupup: false },
      };
    case "LOGOUT":
      localStorage.setItem(
        "branches",
        JSON.stringify(state.PersonContext.branches)
      );
      return {
        ...state,
        PersonContext: { ...state.PersonContext, isLogged: false, type: "" },
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: [...action.payload],
      };
    case "GET_BRANCHES":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...action.payload],
        },
      };
    case "ADD_BRANCH":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...state.PersonContext.branches, action.payload],
        },
      };
    case "DELETE_BRANCH":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...action.payload],
        },
      };
    case "GET_BRANCH_PRODUCTS":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...action.payload],
        },
      };
    case "DELETE_PRODUCT_CONDITION":
      return {
        ...state,
        visualCondition: {
          ...state.visualCondition,
          deleteProductCondition: !state.visualCondition.deleteProductCondition,
        },
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...action.payload],
        },
      };
    case "EDIT_BRANCH_CONDITION":
      return {
        ...state,
        visualCondition: {
          ...state.visualCondition,
          editBranchCondition: !state.visualCondition.editBranchCondition,
        },
      };
    case "EDIT_BRANCH_INFO":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...action.payload],
        },
      };
    case "ADD_PRODUCT_CONDITION":
      return {
        ...state,
        visualCondition: {
          ...state.visualCondition,
          addProductCondition: !state.visualCondition.addProductCondition,
        },
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          branches: [...action.payload],
        },
      };

    default:
      return state;
  }
};
