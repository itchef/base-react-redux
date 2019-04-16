const initialState = {
  count: 0,
};

const baseReducer = (state = initialState, action = {}) => {
  if (action.type === 'INC') {
    return { ...state, count: action.payload };
  }
  return state;
};

export default baseReducer;
