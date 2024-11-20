import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AppState, AppThunkDispatch } from './types'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState
  dispatch: AppThunkDispatch
}>()
