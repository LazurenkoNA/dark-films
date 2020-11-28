import { CHANGE_PAGE } from '../utils/constants';

const setCurrentPage = (pageName) => (dispatch) => {
  dispatch({
    type: CHANGE_PAGE,
    payload: {
      page: pageName,
    },
  });
};

export default setCurrentPage;
