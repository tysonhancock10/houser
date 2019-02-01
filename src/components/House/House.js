import React, {Component} from 'react'
import axios from 'axios'
// import {connect} from 'react-redux'

class House extends Component {
    
    handleDeleteHouses(id){
        axios.delete(`http://localhost:4000/api/houses/${id}`)
        .then(response => {
            console.log(response)

            this.setState({
                
                    houses: response.data
                
            })
        })
    }
    render(){


    return(

        <div>
            <p>{this.props.name}</p>
           <p>{this.props.address}</p>
           <p>{this.props.city}</p>
           <p>{this.props.state}</p>
           <p>{this.props.zip}</p>
           <button onClick= {() => this.handleDeleteHouses()}>Delete</button>
        </div>
    )
    }
}

    export default  (House)