import { combineSlices } from '@reduxjs/toolkit'

/**
 * 🔊 WARNING: By default rootReducer is empty and
 * you can use `rootReducer.inject(reduxSlice)`
 * to inject local redux-slice in the app store
 */
export const rootReducer = combineSlices()
