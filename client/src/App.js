
import './App.css';

import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import LoadingBar from "react-top-loading-bar";


const App =()=> {


  const pagesize = 10;

  const [progress, setProgress] = useState(0);
   
    return (
      <BrowserRouter>
        <div>
          <Navbar />
         <LoadingBar
          color='#f11946'
          progress={progress}
         />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={setProgress} 
                  key="general"
                  pageSize={  pagesize}
                  
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News setProgress={setProgress}   
                  key="business"
                  pageSize={  pagesize}
                  
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={setProgress}   
                  key="entertainment"
                  pageSize={  pagesize}
                  
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/general"
              element={
                <News setProgress={setProgress}   
                  key="general"
                  pageSize={  pagesize}
                  
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News setProgress={setProgress}   
                  key="health"
                  pageSize={  pagesize}
                  
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News setProgress={setProgress}   
                  key="science"
                  pageSize={  pagesize}
                  
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News setProgress={setProgress}   
                  key="sports"
                  pageSize={  pagesize}
                  
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News setProgress={setProgress}   
                  key="technology"
                  pageSize={  pagesize}
                  
                  category="technology"
                />
              }
            />
          </Routes>

         
        </div>
      </BrowserRouter>
    ); 
  }

  export default App;

