import React from 'react';
import './App.css'

export default class text extends React.Component{

    render(){
        return(
            <div className="textValue">

            <input type="text" id="tName" name="name" placeholder="value" />
            <label id="labels">=</label>
            <input type="text" id="tName" name="name" placeholder="value" />
            </div>
        )
    }
}