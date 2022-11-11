import { GET_CHARACTERS } from "../actions/type";

const initialState = {
  characters: [],
  allCharacters: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        allCharacters: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
