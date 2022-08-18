import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";

// check product quantity middleware
const checkProductQuantity = (store) => (next) => (action) => {
    const quantity = action.payload?.quantity;

    if (quantity > 0 && quantity <= 20) {
        return next(action);
    }

    else {
        return;
    };
};

const store = createStore(rootReducer, applyMiddleware(checkProductQuantity));

export default store;