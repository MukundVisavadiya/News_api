import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
// import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Reduxnews from "./components/Reduxnews";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <LoadingBar
        color='#0000FF'
        height={3}
        progress={progress}
      />
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/general" element={<Reduxnews setProgress={setProgress} apikey={apikey} key="general" pageSize={12} country='in' category='general' />}></Route>
        {/* <Route exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={12} country="in" category="business" />}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={12} country="in" category="entertainment" />}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={12} country="in" category="health" />}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={12} country="in" category="science" />}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={12} country="in" category="sports" />}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={12} country="in" category="technology" />}></Route> */}
      </Routes>
      {/* <Reduxnews></Reduxnews> */}
    </div>
  );
}
export default App