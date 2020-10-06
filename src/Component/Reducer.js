export const initialState = {
    basket : []
};

const Reducer = (state, action)=>{
    switch (action.type) {
        case 'Add to Basket':
            return{
                ...state,
                basket: [...state.basket, action.item]
            }
        
            break;

        case 'Remove item from Basket':
            return {
                
            }
    
        default:
            return state;
    }
}

export default Reducer;