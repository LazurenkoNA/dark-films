import { CHANGE_PAGE } from '../utils/constants';

const initState = {
  currentPage: 'movies',
};

const currentPageReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, currentPage: action.payload.page };
    default:
      return state;
  }
};

export default currentPageReducer;
