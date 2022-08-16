import { ADD_PRODUCT_TO_CART, CALCULATE_TOTAL_ITEM, CALCULATE_TOTAL_PRICE, REMOVE_PRODUCT_TO_CART } from './actionTypes';

const initialState = {
    cart: [],
    totalItem: 0,
    totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
    const newState = {
        ...state,
        cart: [...state.cart]
    };

    const findIndex = newState.cart.findIndex(product => product.id === action.payload.id);

    const totalPrice = newState.cart.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price;
    }, 0);
    
    switch(action.type) {        
        case ADD_PRODUCT_TO_CART:
            if (findIndex !== -1) {
                newState.cart[findIndex].quantity += 1;
            }

            else {
                newState.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            };

            return newState;

        case REMOVE_PRODUCT_TO_CART:    
            if (findIndex !== -1) {
                newState.cart[findIndex].quantity -= 1;
            }
    
            else {
                newState.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            };
    
            return newState;
        
        case CALCULATE_TOTAL_ITEM:
            return {
                ...newState,
                totalItem: newState.cart.length
            };

        case CALCULATE_TOTAL_PRICE:
            return {
                ...newState,
                totalPrice: totalPrice
            };

        default:
            return newState;
    };
};

export default cartReducer;