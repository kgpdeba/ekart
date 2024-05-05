import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from "./components/Main";
import AddProduct from "./components/Pages/AddProduct";
import AddCatagory from "./components/Pages/AddCatagory";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Main/>}></Route>
        <Route exact path="/Pages/AddProduct" element={<AddProduct />}></Route>
        <Route exact path="/Pages/AddCatagory" element={<AddCatagory />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
