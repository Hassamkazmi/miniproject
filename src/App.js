import React, { lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import Loader from "./Components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
// const Home = lazy(() => import("./pages/Home"));
// const Sales = lazy(() => import('./pages/Sales'))
function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = '/' element= {<Home/>}/>
            <Route path = '/sales' element= {<Sales/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
