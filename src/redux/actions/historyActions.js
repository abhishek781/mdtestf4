export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';

export const addToHistory = (word) => {
  return {
    type: ADD_TO_HISTORY,
    payload: word,
  };
};

