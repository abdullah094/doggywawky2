import { createSlice } from '@reduxjs/toolkit'




let val = 'porp'
export const CartSlice = createSlice({
  
  name: 'cart3',
  
  initialState: {
    user:{
    value: 0,
    username: 0,
    Id: 4
  },
 
  total: 0,
  cart: {},
  
},

  reducers: {
  addtoCart: (state,action) => {
      
      state.user.value += 1;
      state.cart = {
       name: 'dog',
        id: 'castatet',
        price:state.user.Id,
        dd: action.username

      }
    
  
    },
    removefromCart: (state,) => {
      
      state.user.value -= 1

    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addtoCart,removefromCart} = CartSlice.actions
export default CartSlice.reducer

