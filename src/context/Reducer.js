export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PET": {
      return {
        ...state,
        Pets: [...state.Pets, action.payload],
      };
    }
    case "EDIT_PET": {
      return {
        ...state,
        Pets: state.Pets.map((Pet) => {
          return Pet.id === action.payload.id ? action.payload : Pet;
        }),
      };
    }
    case "REMOVE_PET": {
      return {
        ...state,
        Pets: state.Pets.filter((Pet) => {
          return Pet.id !== action.payload;
        }),
      };
    }
    case "LIST_PET": {
      return {
        ...state,
        Pets: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
