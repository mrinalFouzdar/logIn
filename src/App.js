import "./App.css";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Navcmpt from "./components/Nav/Nav";
import PrivateCmpt from "./PrivateCmpt/PrivateCmpt";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Navcmpt />
      <Routes>
        <Route element={<PrivateCmpt />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path="/logIn" element={<LogIn />} />
      </Routes>
      {/* <LogIn/> */}
    </div>
  );
}

export default App;
