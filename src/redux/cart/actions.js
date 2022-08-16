import {
    ADD_PRODUCT_TO_CART, CALCULATE_TOTAL_ITEM,
    CALCULATE_TOTAL_PRICE, REMOVE_PRODUCT_TO_CART
} from "./actionTypes";

export const addProductToCart = (product) => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    };
};

export const removeProductToCart = (product) => {
    return {
        type: REMOVE_PRODUCT_TO_CART,
        payload: product
    };
};

export const calculate_total_item = () => {
    return {
        type: CALCULATE_TOTAL_ITEM,
    };
};

export const calculate_total_price = () => {
    return {
        type: CALCULATE_TOTAL_PRICE,
    };
};