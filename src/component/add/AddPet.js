import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../context/GlobalState";

const AddPet = () => {
  const history = useNavigate();
  const { addPet } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [birthYear, setspecies] = useState("");
  const [species, setBirthYear] = useState("");

  const onSubmit = (e) => {
    if (!name || !birthYear || !species) return;
    addPet({
      id: uuidv4(),
      name,
      birthYear,
      species,
    });

    e.preventDefault();
    history("/");
  };

  return (
    <form className="w-full max-w-sm container mt-20 mx-auto">
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          Name of Pet
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Pet Name"
        />
      </div>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="birthYear"
        >
          species
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={birthYear}
          onChange={(e) => setspecies(e.target.value)}
          type="text"
          placeholder="Enter Species"
        />
      </div>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="species"
        >
          Birth Year
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
          value={species}
          onChange={(e) => setBirthYear(e.target.value)}
          type="text"
          placeholder="Enter Birth Year"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onSubmit}
        >
          Add Pet
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">Cancel</Link>
      </div>
    </form>
  );
};

export default AddPet;
