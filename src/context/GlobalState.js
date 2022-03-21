import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppReducer } from "./Reducer";
export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, {
    Pets: [
      {
        id: uuidv4(),
        name: "Mypet",
        birthYear: "21/03/2022",
        species: "Bachelor",
      },
    ],
  });

  const addPet = (Pet) => dispatch({ type: "ADD_PET", payload: Pet });
  const listPet = (Pet) => dispatch({ type: "LIST_PET", payload: Pet });
  const editPet = (Pet) => dispatch({ type: "EDIT_PET", payload: Pet });
  const removePet = (id) => dispatch({ type: "REMOVE_PET", payload: id });

  return (
    <GlobalContext.Provider
      value={{
        Pets: state.Pets,
        addPet,
        listPet,
        editPet,
        removePet,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
