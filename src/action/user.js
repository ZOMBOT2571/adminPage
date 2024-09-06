import { userTypes, menuTypes } from "../constants/action-types";

export const setUserToken = (data) => (dispatch) => {
  dispatch({
    type: userTypes.SET_USER,
    data: data,
  });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: userTypes.REMOVE_USER,
  });
};


export const setUserMenu = (data) => (dispatch) => {
  dispatch({
    type: menuTypes.SET_MENU,
    data: data,
  });
};

export const removeMenu = () => (dispatch) => {
  dispatch({
    type: menuTypes.REMOVE_MENU,
  });
};