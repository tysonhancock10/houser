import React, {Component} from 'react'
import axios from 'axios'
// import {connect} from 'react-redux'

const House =(props) => {
  
    
    return(
        <div>
            <p>{props.name}</p>
           <p>{props.address}</p>
           <p>{props.city}</p>
           <p>{props.state}</p>
           <p>{props.zip}</p>
           <button  onClick={() => mapStateToProps(this.state)}>Delete</button>
        </div>
    )
}

function mapStateToProps(state){
    return{
        name: '',
        address:'',
        city: '',
        state:'',
        zip: 0
    }
} 
// connect(mapStateToProps)
    export default  (House)