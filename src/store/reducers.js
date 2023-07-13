const admin = { name: "admin", password: "admin" };
const user = { name: "user", password: "user" };

export const mainReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      if (
        state.personContext === admin.name &&
        state.personContext.password === admin.password
      ) {
        return {
          ...state,
          personContext: { ...personContext, isLogged: true, type: admin.name },
        };
      } else if (
        state.personContext === user.name &&
        state.personContext.password === user.password
      ) {
        return {
          ...state,
          personContext: { ...personContext, isLogged: true, type: user.name },
        };
      }
    case "LOGOUT":
      return {
        ...state,
        personContext: { ...personContext, isLogged: false, type: "" },
      };
  }
};
