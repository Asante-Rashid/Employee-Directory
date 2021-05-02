// import logo from './logo.svg';
// import './App.css';
import React from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

function App() {
  return (
    <div className="container">
    <NavBar/>
    <SearchBar/>
    <Table/> 
    </div>

  );
}

export default App;
