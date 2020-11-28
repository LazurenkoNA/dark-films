import { TOGGLE_THEME } from '../utils/constants';

const toggleTheme = () => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};

export default toggleTheme;
