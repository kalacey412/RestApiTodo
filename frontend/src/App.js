import './App.css';
import React, { Component } from 'react';
import { List } from './components/List';
import { NavBar } from './components/NavBar';

import { TaskDelete } from './components/DeleteTask';
import { TaskCreate } from './components/AddTask';
import{
  BrowserRouter,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path="/">
        <>
          <NavBar />
          <List />
        </>
      </Route>
      <Route exact path="/delete-task/:id">
        <TaskDelete />
      </Route>
      <Route exact path="/create-task">
        <TaskCreate />
      </Route>
      
    </div> 
    </BrowserRouter>

  );
}

export default App;