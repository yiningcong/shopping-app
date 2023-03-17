import { Fragment } from "react";

import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/Layout/MainContainer";
import MainHeader from "./components/Layout/MainHeader";
import AddFood from "./components/AddFood/AddFood";

let isInitial = true;

function App() {
  return (
    <Fragment>
      <MainHeader />
      <main className="mt-8 md:mt-10 px-4 md:px-10 py-2 w-full">
        <Routes>
          <Route path="/*" element={<MainContainer />} />
          <Route path="/add-food" element={<AddFood />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
