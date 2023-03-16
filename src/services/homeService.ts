import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Story, Post } from '@/types'

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getStories: builder.query<Story[], number | 'all'>({
      query: (id) => {
        if (id !== 'all') return `stories/${id}`
        return 'stories'
      },
    }),
    getPosts: builder.query<Post[], number | 'all'>({
      query: (id) => {
        if (id !== 'all') return `posts/${id}`
        return 'posts'
      },
    }),
  }),
})

export const { useGetStoriesQuery, useGetPostsQuery } = homeApi
export const homeApiReducer = homeApi.reducer
