import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Wizard extends Component{

    render(){
        return(
            <div>

                Wizard
                <Link to='/'><button>Cancel</button></Link>
                <Link to='/step1'><button>First Step</button></Link>
               
            </div>
        )
    }
}
export default Wizard