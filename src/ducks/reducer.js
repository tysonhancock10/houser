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
    
    const DELETE_ONE = 'DELETE_ONE';
    
    export function DELETE_IT(one) {
        return {
            type: DELETE_ONE,
            payload: one
        }
    }
    
    export default function reducer(state= initialState, action){
        switch(action.type) {
            case DELETE_ONE:
            return Object.assign({}, state, action.payload);
            default: 
            return state
        }
    }