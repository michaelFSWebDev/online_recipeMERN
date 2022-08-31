import React, {useState} from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
// import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';

const App= ()=> {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route element={<Main/>} path="/home" defualt/> */}
          <RecipeList path="/home"/>
        {/* </Routes>
      </BrowserRouter> */}


    </div>
  );
}

export default App;
