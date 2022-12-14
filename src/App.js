import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Login} from "./layout/index"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
