import React, { useState } from 'react'; //add this line
import './App.css';
import AddStudents from './components/AddStudents';
import Header from './components/Header';
import Counter from './components/counter/Counter'
import EditStudents from './components/EditStudents';
import Home from './components/home/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom" // edit this line
import AllStudents from './components/AllStudents';


function App() {

  //take id by all students
  const [selectId, setId] = useState()
  console.log(selectId);
  return (  //do some changes here.add BrowserRouter and Routes eliment and do some changes insight Route 
    <div className="App">
      <BrowserRouter>
        
        <Header/>
          <Routes>
            <Route path="add" exact element={<AddStudents />} />
            <Route path="counter"  element={<Counter />} />
            <Route path="/" exact element={<AllStudents setId={setId} />} />
            <Route path="edit/" exact element={ <EditStudents selectId={selectId} />} />

            {/* <Route path="home" element={<Home />} /> */}
          </Routes>
        

        


      
      
      </BrowserRouter>
    </div>

  );
  console.log(selectId);
}

export default App;
