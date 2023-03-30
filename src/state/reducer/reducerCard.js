const defaultState = {
  name: '',
  numberCard: '',
  year: '',
  month: '',
  CVC: '',
};

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_NUMBER = 'CHANGE_NUMBER';
const CHANGE_CVC = 'CHANGE_CVC';
const CHANGE_YEAR = 'CHANGE_YEAR';
const CHANGE_MONTH = 'CHANGE_MONTH';

export const reducerCard = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    case CHANGE_NUMBER:
      return { ...state, numberCard: action.payload };
    case CHANGE_CVC:
      return { ...state, CVC: action.payload };
    case CHANGE_YEAR:
      return { ...state, year: action.payload };
    case CHANGE_MONTH:
      return { ...state, month: action.payload };

    default:
      return state;
  }
};

export const changeNameAction = (payload) => ({ type: CHANGE_NAME, payload });
export const changeNumberAction = (payload) => ({
  type: CHANGE_NUMBER,
  payload,
});
export const changeCVCAction = (payload) => ({ type: CHANGE_CVC, payload });
export const changeYearAction = (payload) => ({ type: CHANGE_YEAR, payload });
export const changeMonthAction = (payload) => ({ type: CHANGE_MONTH, payload });
