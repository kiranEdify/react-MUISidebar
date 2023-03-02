import { Route, Routes } from "react-router-dom";

//routes component
import Home from "./components/routes/Home";
import Installation from "./components/routes/Installation";
import Learn from "./components/routes/Learn";
import AutoComplete from "./components/routes/AutoComplete";
import FallBackRoute from "./components/routes/FallBackRoute";
import Button from "./components/routes/Button";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="installation" element={<Installation />} />
          <Route path="learn" element={<Learn />} />
          <Route path="autocomplete" element={<AutoComplete />} />
          <Route path="button" element={<Button />} />
          <Route path="*" element={<FallBackRoute />} />
        </Route>
        <Route path="*" element={<FallBackRoute />} />
      </Routes>
    </>
  );
}

export default App;
