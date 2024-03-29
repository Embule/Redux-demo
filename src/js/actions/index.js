import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function getData() {
  return function (dispatch) {
    return fetch("http://localhost:3500/api/people")
      .then(res => res.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json });
      });
  };
}