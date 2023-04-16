import React from 'react';
import { useGetImagesQuery } from '../services/api';
import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import Preloader from './Preloader';
import { type IImages } from 'types/IImages';
import Card from './Card';

const ImagesCardList = () => {
  const { search } = useSelector((state: RootState) => state.images);
  const { data, isFetching } = useGetImagesQuery(search.length !== 0 ? search : undefined);

  return (
    <div className="wrapper">
      <div className="cards" role="cards">
        {isFetching && <Preloader />}
        {!isFetching &&
          data !== null &&
          data?.results.map((cardData: IImages, index: number) => (
            <Card cardData={cardData} key={index} />
          ))}
      </div>
    </div>
  );
};

export default ImagesCardList;
