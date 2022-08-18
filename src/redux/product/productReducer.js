import {
    ADD_PRODUCT_TO_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    REMOVE_PRODUCT_TO_CART,
    TOTAL_ITEM,
    TOTAL_PRICE
} from './actionTypes';

const initialState = {
    productList: [
        {
            id: 6569335955175,
            name: "Asus Vivobook X515MA",
            price: 35500,
            quantity: 20
        },

        {
            id: 9203545526678,
            name: "Dell E1916HV 18.5 Inch",
            price: 9300,
            quantity: 35
        },

        {
            id: 5827333451744,
            name: "Canon Eos 4000D 18MP",
            price: 36500,
            quantity: 72
        }
    ],
    cart: [],
    totalItem: 0,
    totalPrice: 0
};

const productReducer = (state = initialState, action) => {
    const newState = {
        ...state,
        productList: [...state.productList],
        cart: [...state.cart]
    };

    const itemIndex = newState.cart.findIndex(product => product.id === action?.payload?.id);
    
    switch(action.type) {  
        case TOTAL_ITEM:
            const totalItem = newState.cart.reduce((previousValue, currentValue) => {
                return previousValue + currentValue.quantity;
            }, 0);

            newState.totalItem = totalItem;
            return newState;

        case TOTAL_PRICE:
            const totalPrice = newState.cart.reduce((previousValue, currentValue) => {
                return previousValue + (currentValue.price * currentValue.quantity);
            }, 0);
    
            newState.totalPrice = totalPrice;
            return newState;

        case INCREASE_QUANTITY:
            newState.productList.forEach(product => {
                if (product.id === action.payload.id) {
                    product.quantity += 1;
                };
            });
            return newState;

        case DECREASE_QUANTITY:
            newState.productList.forEach(product => {
                if (product.id === action.payload.id) {
                    product.quantity -= 1;
                };
            });
            return newState;
        
        case ADD_PRODUCT_TO_CART:
            if (itemIndex !== -1) {
                newState.cart[itemIndex].quantity += 1;
            }

            else {
                newState.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            };

            return newState;

        case REMOVE_PRODUCT_TO_CART:
            if (newState.cart[itemIndex].quantity >= 1) {
                newState.cart[itemIndex].quantity -= 1;

                if (newState.cart[itemIndex].quantity === 0) {
                    newState.cart.splice(itemIndex, 1);
                };
            };

            return newState;

        default:
            return newState;
    };
};

export default productReducer;