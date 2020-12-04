import { CHANGE_GENRE_NAME } from '../utils/constants';

const initState = {
  nameGenre: 'Documentary',
};

const currentGenreReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_GENRE_NAME:
      return { ...state, nameGenre: action.payload.nameGenre };
    default:
      return state;
  }
};

export default currentGenreReducer;
