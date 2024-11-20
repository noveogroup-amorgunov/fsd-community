import type { Action, ThunkDispatch } from '@reduxjs/toolkit'

/**
 * 🔊 WARNING: We stop deriving the global app state specifically
 * to eliminate the possibility of implicit access to other redux-slices
 * like state.cart.items in some unrelated slice
 */
export type AppState = any

export type AppThunkDispatch = ThunkDispatch<AppState, any, Action>
