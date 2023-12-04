import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Reduxnews from "./components/Reduxnews";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/general" element={<Reduxnews apikey={apikey} key="general" pageSize={12} country='in' category='general' />}></Route>
        <Route exact path="/business" element={<Reduxnews apikey={apikey} key="business" pageSize={12} country="in" category="business" />}></Route>
        <Route exact path="/entertainment" element={<Reduxnews apikey={apikey} key="entertainment" pageSize={12} country="in" category="entertainment" />}></Route>
        <Route exact path="/health" element={<Reduxnews apikey={apikey} key="health" pageSize={12} country="in" category="health" />}></Route>
        <Route exact path="/science" element={<Reduxnews apikey={apikey} key="science" pageSize={12} country="in" category="science" />}></Route>
        <Route exact path="/sports" element={<Reduxnews apikey={apikey} key="sports" pageSize={12} country="in" category="sports" />}></Route>
        <Route exact path="/technology" element={<Reduxnews apikey={apikey} key="technology" pageSize={12} country="in" category="technology" />}></Route>
      </Routes>
    </div>
  );
}
export default App