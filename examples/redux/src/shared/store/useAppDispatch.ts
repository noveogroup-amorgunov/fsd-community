import { useDispatch } from 'react-redux'
import type { AppThunkDispatch } from './types'

export const useAppDispatch = useDispatch.withTypes<AppThunkDispatch>()
