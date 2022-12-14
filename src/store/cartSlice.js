const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload);
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
        total(state, action) {
            state.push(action.payload.price);
        }
    },
});

export const { add, remove, total } = cartSlice.actions;
export default cartSlice.reducer;
