import { combineSlices } from '@reduxjs/toolkit'

/**
 * 🔊 WARNING: By default rootReducer in empty and
 * you can use `rootReducer.inject(reduxSlice)`
 * to unject local redux-slice to app store
 */
export const rootReducer = combineSlices()
