import React from "react";
// import logo from "/home/admin1/Desktop/my-app/src/image/units_of_measure.gif";
import "./App.css";
import Title from './title'
import DropdownUnitValue from './dropdownUnitValue'
 import Text from './text'
import Dropdown from './dropdown'

function App() {
  

  return (
    <div className="App">
      
      <div className="border">
      <Title></Title>
        <div className="dropdownMain">
          <Dropdown></Dropdown>
        </div>
       
      </div>

    </div>
  )


        }
        
export default App;