const initialState = {
    house_name: '',
    house_address: '',
    city: '',
    state: '',
    zip: 0,
    image: '',
    monthlyMortgage: 0,
    rent: 0

    }
    
    const ADD_ONE = 'ADD_ONE';
    const ADD_IMAGE = 'ADD_IMAGE';
    
    export function ChangeStepOne(name, address, city, state, zip) {
        return {
            type: ADD_ONE,
            payload: { 
                name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
            } 
        }
    }
    export function changeStepTwo(image){
        return{
            type: ADD_IMAGE,
            payload: {
                image: ""
            }
        }
    }
    
    export default function reducer(state= initialState, action){
        switch(action.type) {
            case ADD_ONE:
            return Object.assign({}, state, action.payload);
            case ADD_IMAGE:
            return Object.assign({}, state, action.payload);
            default: 
            return state
        }
    }