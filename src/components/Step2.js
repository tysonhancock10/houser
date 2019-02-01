import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {changeStepTwo} from '../ducks/reducer'

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
function mapStateToProps(state){
    return{
        image: state.image
    }
} 
export default connect(mapStateToProps, {changeStepTwo}) (Step2)