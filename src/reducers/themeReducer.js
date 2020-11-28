import { TOGGLE_THEME } from '../utils/constants';

const initState = {
  isDarkTheme: true,
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return { ...state, isDarkTheme: !state.isDarkTheme };
    default:
      return state;
  }
};

export default themeReducer;
