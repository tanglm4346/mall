const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const initState = {
  username: "",
  isAuth: false
};

//reduce
export function authorize(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuth: true, username: "tlm" };
    case LOGOUT:
      return { ...state, isAuth: false, username: "" };
    default:
      return state;
  }
}

export function login() {
  return { type: LOGIN };
}

export function logout() {
  return { type: LOGOUT };
}
