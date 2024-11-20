import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '~shared/store'

/**
 * Redux haters, where do you see the boilerplate code? 😃
 */
export const store = configureStore({
  reducer: rootReducer,
})
