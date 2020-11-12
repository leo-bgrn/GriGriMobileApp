const initialState = {whoAmI: undefined};

function setWhoAmI(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'SET_WHO_AM_I':
      nextState = {
        ...state,
        whoAmI: action.value,
      };
      return nextState || state;
    default:
      return state;
  }
}

export default setWhoAmI;
