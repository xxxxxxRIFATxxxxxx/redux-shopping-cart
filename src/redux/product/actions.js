import {
    ADD_PRODUCT_TO_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    REMOVE_PRODUCT_TO_CART,
    TOTAL_ITEM,
    TOTAL_PRICE
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

export const increaseQuantity = (product) => {
    return {
        type: INCREASE_QUANTITY,
        payload: product
    };
};

export const decreaseQuantity = (product) => {
    return {
        type: DECREASE_QUANTITY,
        payload: product
    };
};

export const totalItem = () => {
    return {
        type: TOTAL_ITEM
    };
};

export const totalPrice = () => {
    return {
        type: TOTAL_PRICE
    };
};
