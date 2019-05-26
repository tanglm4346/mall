const ADD_GUN = "add";
const DEL_GUN = "del";

const initState = 10;
const counter = (state = initState, action) => {
  switch (action.type) {
    case ADD_GUN:
      return state + 1;
    case DEL_GUN:
      return state - 1;
    default:
      return initState;
  }
};
const addGun = () => {
  return { type: ADD_GUN };
};
const delGun = () => {
  return { type: DEL_GUN };
};
const addGunAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_GUN
      });
    }, 2000);
  };
};
export { counter, addGun, delGun, addGunAsync };
