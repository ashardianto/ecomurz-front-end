import { configureStore } from '@reduxjs/toolkit'
import searchInput from './search/action'
import cartInput from './search/action'

export const store = configureStore({
  reducer: {
    // search: searchInput,
    addToCart: cartInput
  }
})
