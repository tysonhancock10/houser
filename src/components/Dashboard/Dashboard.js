import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            houses: []
        }
    }
    handleGetHouses() {
        axios.get('http://localhost:4000/api/houses')
            .then(response => {
              console.log(response)
                
                this.setState({
                    houses:response.data
                    
                })
                
            })
        }
        componentDidMount(){
          this.handleGetHouses()
        }

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
       const mappedHouses = this.state.houses.map((house,i) => {
            return(

                <div>

                <House name={house.name}
                address={house.address}
                city={house.city} 
                state={house.state}
                zip={house.zip}
                handleDeleteHouses={this.handleDeleteHouses()}
                id={i}/>
                
                </div>
            )
        })
        return(
            <div>
                Dashboard
                <House />
                <Link to='/wizard'><button>Add New Property</button></Link>
                {mappedHouses}
            </div>
        )
    }
}
export default Dashboard