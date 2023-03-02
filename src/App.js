import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

//routes component
import Home from "./components/routes/Home";
// import Installation from "./components/routes/Installation";

import Learn from "./components/routes/Learn";
import AutoComplete from "./components/routes/AutoComplete";
import FallBackRoute from "./components/routes/FallBackRoute";
import Button from "./components/routes/Button";
import SuspenseFallback from "./components/utilities/SuspenseFallback";

const LazyInstallation = lazy(() => import("./components/routes/Installation"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="installation"
            element={
              <Suspense fallback={<SuspenseFallback />}>
                <LazyInstallation />
              </Suspense>
            }
          />
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
