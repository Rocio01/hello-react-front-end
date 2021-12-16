const SET_GREETINGS = 'hello-react-front-end/greetings/SET_GREETINGS';
const initialState = {
  greetings: [],
};

const setGreetings = (payload) => ({
  type: SET_GREETINGS,
  payload,
});

export const fetchGreeting = () => async (dispatch) => {
  await fetch('http://localhost:3000/v1/greetings')
    .then((response) => response.json())
    .then((json) => dispatch(setGreetings(json)));
};

const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETINGS:
      return { ...state, greetings: action.payload };
    default:
      return state;
  }
};

export default greetingsReducer;
