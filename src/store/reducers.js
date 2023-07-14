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
        },
      };

    case "LOGIN_USER":
      return {
        ...state,
        PersonContext: {
          ...state.PersonContext,
          isLogged: true,
          type: user.name,
        },
      };
    case "LOGOUT":
      return {
        ...state,
        PersonContext: { ...state.PersonContext, isLogged: false, type: "" },
      };

    default:
      return state;
  }
};
