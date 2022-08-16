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
    ]
};

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        
        default:
            return state;
    };
};

export default productReducer;