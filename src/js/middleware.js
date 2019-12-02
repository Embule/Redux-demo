import { ADD_ARTICLE } from "../js/constants/action-types";

const forbiddenWords = ["spam", "money", "javascript"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter(word =>
          action.payload.title.includes(word)
        );
        if (foundWord.length) {
          alert("FORBIDDEN WORD, YOU FOOL!")
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    }
  }
}