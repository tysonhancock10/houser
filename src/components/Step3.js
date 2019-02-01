import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step3 extends Component{
    constructor(){
        super()
        this.state= {
            monthlyMortgage: 0,
            rent: 0
        }
    }
    handleMortgageInput(val){
        this.setState({
            monthlyMortgage: val
        })
    }
    handleRentInput(val){
        this.setState({
            rent: val
        })
    }

    render(){
    return(
        <div>
             <input onChange={(e) => {
                    this.handleMortgageInput(e.target.value)
                }}>
                </input>
                <input onChange={(e) => {
                    this.handleRentInput(e.target.value)
                }}>
                </input>
                <button> submit </button>
                <Link to='/'><button>cancel</button></Link>
        Step3
        </div>
        )
    }
}
export default Step3