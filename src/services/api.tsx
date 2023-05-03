import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IImages } from '../types/IImages';

interface ICardsImages {
  results: IImages[];
  total: number;
  total_pages: number;
}

const baseURL = 'https://api.unsplash.com';
const apiKey = 'id=oUzXmCaN7FyevXb3pn-y_bUTpR1uBXUgPthsuwjdZjA';

export const unsplashAPI = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getImages: builder.query<ICardsImages, string | undefined>({
      query: (query) =>
        query !== null || query === ''
          ? `/search/photos?&per_page=9&page=1&query=${query as string}&client_${apiKey}`
          : `/search/photos?&per_page=9&page=1&query=randome&client_${apiKey}`,
    }),
    getImage: builder.query<IImages, string>({
      query: (id: string) => `${baseURL}/photos/${id}?client_${apiKey}`,
    }),
  }),
});

export const { useGetImagesQuery, useGetImageQuery } = unsplashAPI;
