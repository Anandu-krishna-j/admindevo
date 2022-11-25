import { Routes, Route } from "react-router-dom";
import InstitutionsList from "./Containers/InstitutionsList";
import LoginContainers from "./Containers/LoginContainers";


function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginContainers />} />
      <Route path ='/instilist' element={<InstitutionsList/>}/>
      <Route path='/addinsti' />
    </Routes>
  );
}

export default App;
