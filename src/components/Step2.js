import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Step2 extends Component{
    constructor(){
        super()
        this.state= {
            image: ''
        }
    }

    handleImageInput(val){
        this.setState({
            image: val
        })
    }
    render(){
    return(
        <div>
            <Link to='/step3'><button>Next Step</button></Link>
            <Link to='/'><button>cancel</button></Link>
            <button>previous step</button>
            <input onChange={(e) => {
                    this.handleImageInput(e.target.value)
                }}>
                </input>
        Step2
        </div>
        )
    }
}
export default Step2