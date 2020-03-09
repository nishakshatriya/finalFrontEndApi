import React, { Component } from 'react';
import './App.css'
import Units from "./dropdownUnitValue"
import {configuration,getUnitType, getKeys} from '../src/configuration/configuration'


export default class dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            unit: "",
            firstUnit: "",
            secondUnit: "",
            unitValue1: 0,
            result: 0,
            type:[]
        };
    }

    getUnit = async event => {
        await this.setState({ unit: event.target.value });
        console.log("in getUnit--->",this.state.unit);
        getUnitType(this.state.unit)
        .then(response => {
            this.setState(response.data.data)
        }).catch((err)=>{
            console.log('someting went wrong');
            
        })
        
    }

    getValue = (event) => {
        this.setState({ unitValue1: event.target.value });

    }

    buttonClick = () => {

        var data = {
            unit:this.state.unit,
            firstUnit: this.state.firstUnit,
            secondUnit: this.state.secondUnit,
            unitValue1: this.state.unitValue1
        }

        configuration(data)
            .then(response => {
                console.log("success  ", response.data);
                this.setState({ result: response.data.data})
            }).catch((err) => {
                console.log("Something went wrong")
            })
    }

    handleFirstUnit = (val) => {
        this.setState({ firstUnit: val })
    }

    handleSecondUnit = (val) => {
        this.setState({ secondUnit: val })
    }

    componentWillMount(){
        getKeys().then(response => {
            console.log('success',response.data);
            this.setState({type:response.data})
            
        })
    }
    render() {

    const getKeys = this.state.type.map((value,key) =>{
        return (
        <option key = {key}>{value}</option>
        )
    })
        
        return (
            <div className="dropdownMain">
                <div className="dropdown">
                    <select className="dropdown" onChange={this.getUnit}>
                        <option value="N/A">UNIT</option>
                        <option value="LENGTH">LENGTH</option>
                        <option value="VOLUMN">VOLUME</option>
                        <option value="WEIGHT">WEIGHT</option>
                        <option value="TEMPERATURE">TEMPERATURE</option>
                    </select>

                </div>
                <div className="dropdownChild">
                    <Units unit={this.state.unit} firstUnit={this.handleFirstUnit} secondUnit={this.handleSecondUnit} />
                </div>
                <div className="textValue">

                    <input type="text" id="tName" name="name" placeholder="Enter Value" onChange={this.getValue} />
                    <label id="labels">=</label>
                    <input type="text" id="tName" name="name" placeholder="value" value={this.state.result} />
                </div>
                <div>
                    <button type="submit" onClick={this.buttonClick}>Convert</button>
                </div>
            </div>
        )

    }
}


/*
getUnit = async event => {
await this.setState({ unit: event.target.value });
console.log("in getUnit--->",this.state.unit);
getUnitBasicUnitType(this.state.unit)
.then(response=>{
console.log("response data for second api",response.data.data);
this.setState({units:response.data.data})
}).catch((err)=>{
console.log("something went wrong in main dropdown to get units");
})
}
render() {

const gettingUnitTypes=this.state.type.map((value,key)=>{
return(
<option key={key}>{value}</option>
)
}) */