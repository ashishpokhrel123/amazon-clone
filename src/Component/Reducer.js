export const initialState = {
    basket : []
};

/* getting total price  */
export const getBasketSubTotal = (basket) => 
  basket?.reduce((total, item) => item.price + total, 0);




const Reducer = (state, action)=>{
    switch (action.type) {
        case 'Add to Basket':
            return{
                ...state,
                basket: [...state.basket, action.item]
            }
        
            break;
       


        case 'Remove item from Basket':
             const index = state.basket.findIndex(
               (basketItem) => (basketItem.id = action.id)
             );
            let newBasket = [...state.basket];

            if (index >= 0) {
              newBasket.splice(index, 1);
            } else {
              console.warn(
                `Cant remove product (id: ${action.id}) as its not in basket!`
              );
            }
            return {
                ...state,
                basket: newBasket
               

            }
            
            
    
        default:
            return state;
    }
}


export default Reducer;