import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Step1 extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }
    handleNameInput(value){
        this.setState({
            name: value
        })
    
        }
    
        handleAddressInput(value){
            this.setState({
                address:value
            })
        }
    
        handleCityInput(value){
            this.setState({
                city : value
            })
        }
        handleStateInput(value){
            this.setState({
                state: value
            })
        }
        handleZipInput(value){
            this.setState({
                state: value
            })
        }
        handleAddHouses(){
            const bodyObj = {
              house_name: this.state.name, 
              house_address: this.state.address,
              city: this.state.city,
              state: this.state.state,
              zip: this.state.zip

            }
            axios.post('4000/api/houses', bodyObj)
            .then(response => { 
              this.setState({
                  houses: response.data
                })
            })
        }
            render(){
                return(
            <div>
                <Link to='/step2'><button>Next Step</button></Link>
                <input onChange={(e) => {
                    this.handleNameInput(e.target.value)
                }}>
                </input>
                <input onChange={(e) =>{
                    this.handleAddressInput(e.target.value)
                }}></input>
                <input onChange={(e) =>{
                    this.handleCityInput(e.target.value)
                }}></input>
                <input onChange={(e) =>{
                    this.handleStateInput(e.target.value)
                }}></input>
                <input onChange={(e) =>{
                    this.handleZipInput(e.target.value)
                }}></input>
                <Link to='/'><button>cancel</button></Link>
                <button onClick={() => {this.handleAddHouses()}}> add </button>
            </div>
                )
            }
        }
        export default Step1