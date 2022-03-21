import { GlobalState } from "../context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPet from "../component/list/ListPet";
import AddPet from "../component/add/AddPet";
import EditPet from "../component/edit/EditPet";

function Navigation() {
  return (
    <GlobalState>
      <Router>
        <Routes>
          <Route path="/" element={<ListPet />} />
          <Route path="/add" element={<AddPet />} />
          <Route path="/edit/:id" element={<EditPet />} />
        </Routes>
      </Router>
    </GlobalState>
  );
}

export default Navigation;
