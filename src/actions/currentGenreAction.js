import { CHANGE_GENRE_NAME } from '../utils/constants';

const setCurrentGenre = (nameGenre) => (dispatch) => {
  dispatch({
    type: CHANGE_GENRE_NAME,
    payload: {
      nameGenre,
    },
  });
};

export default setCurrentGenre;
