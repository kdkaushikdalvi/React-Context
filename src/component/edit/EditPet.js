import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

const EditPet = () => {
  const history = useNavigate();
  const { editPet, Pets } = useContext(GlobalContext);
  const { id } = useParams();
  const [selectedUser, setSeletedUser] = useState({
    id: null,
    name: "",
    species: "",
    birthYear: "",
  });

  useEffect(() => {
    const selectedUser = Pets.find((Pet) => Pet.id === id);
    setSeletedUser(selectedUser);
  }, []);

  const onSubmit = (e) => {
    editPet(selectedUser);
    e.preventDefault();
    history("/");
  };

  const handleOnChange = (userKey, value) =>
    setSeletedUser({
      ...selectedUser,
      [userKey]: value,
    });

  if (!selectedUser || !selectedUser.id) return <div>Pet not found</div>;

  return (
    <form
      className="w-full max-w-sm container mt-20 mx-auto"
      onSubmit={onSubmit}
    >
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="name"
        >
          Name of Pet
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedUser.name}
          onChange={(e) => handleOnChange("name", e.target.value)}
          type="text"
          placeholder="Enter name"
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
          value={selectedUser.birthYear}
          onChange={(e) => handleOnChange("birthYear", e.target.value)}
          type="text"
          placeholder="Enter birthYear"
        />
      </div>
      <div className="w-full mb-5">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="species"
        >
          BirthYear
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline"
          value={selectedUser.species}
          onChange={(e) => handleOnChange("species", e.target.value)}
          type="text"
          placeholder="Enter species"
        />
      </div>
      <div className="flex items-center justify-between">
        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
          Edit Pet
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <Link to="/">Cancel</Link>
      </div>
    </form>
  );
};

export default EditPet;
