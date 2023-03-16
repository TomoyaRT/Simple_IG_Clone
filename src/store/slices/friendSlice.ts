import { createSlice } from '@reduxjs/toolkit'
import { Friend } from '@/types'
import { FRIEND_LIST } from '@/constants'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

interface InitialState {
  friends: Friend[]
}

const initialState: InitialState = {
  friends: FRIEND_LIST,
}

const changeFriendState = (
  state: InitialState,
  action: PayloadAction<number>,
  isFollowing: boolean
) => {
  const friends = state.friends
  for (let i = 0; i < friends?.length; i++) {
    const friend = friends[i]
    if (friend.id === action.payload) friend.isFollowing = isFollowing
  }
}

export const friendSlice = createSlice({
  name: 'friendSlice',
  initialState,
  reducers: {
    follow: (state, action: PayloadAction<number>) => {
      changeFriendState(state, action, true)
    },
    unFollow: (state, action: PayloadAction<number>) => {
      changeFriendState(state, action, false)
    },
  },
})

export const { follow, unFollow } = friendSlice.actions

export default friendSlice.reducer
