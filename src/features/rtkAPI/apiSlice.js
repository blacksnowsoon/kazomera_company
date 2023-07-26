import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
  // cached reducers expected to be added at state.api it's by default called api 
  reducerPath: 'api', // it's optional

  // all of our request will have URLs starting with /fakeApi the base or root url`
  baseQuery: fetchBaseQuery({baseUrl: '/fakeApi'}),
  
  // define the end points will have all the CRUD opt
  endpoints: (builder) => ({
    getNews: builder.query({
      //fetching posts example /fackeApi/posts
      query:() => `/posts/news`,
    }),
    getNewsPost: builder.query({
      query: (postId) => `posts/news/${postId}` 
    }),
    addNewsPost: builder.mutation({
      query: post => ({
        url: '/posts',
        method: 'POST',
        body: post
      })
    }),
    getInvestments: builder.query({
      query:() => `/posts/investments`, 
    }),
    getProjects: builder.query({
      query:() => `/posts/projects`,
    }),
    getUsers: builder.query({
      query: () => '/users',
    })
  }),
})

// export the auto-generated hooks of the endpoints
export const { 
  useGetNewsQuery, 
  useGetInvestmentsQuery, 
  useGetUsersQuery, 
  useGetProjectsQuery,
  useAddNewsPostMutation
  } = apiSlice