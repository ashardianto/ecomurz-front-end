import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: "",
// }

const initialState = {
  value: 0
}

// export const searchInput = createSlice({
//   name: 'searchInput',
//   initialState,
//   reducers: {
//     watchSearchInput: (state, action) => {
//       state.value = action.payload
//     }
//   },
// })

export const cartInput = createSlice({
  name: 'cartInput',
  initialState,
  reducers: {
    addToCart: (state) => {
      state.value += 1
    }
  },
})


// Action creators are generated for each case reducer function
// export const { watchSearchInput } = searchInput.actions
export const { addToCart } = cartInput.actions

export default cartInput.reducer
