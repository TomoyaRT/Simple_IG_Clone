import { configureStore } from '@reduxjs/toolkit'
import { homeApi, homeApiReducer } from '@/services/homeService'
import friendReducer from '@/store/slices/friendSlice'

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApiReducer,
    friendReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
