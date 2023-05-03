import CardImage from './CardImage';
import CardInfo from './CardInfo';
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';

export interface ICardData {
  image: string;
  title: string;
  person: string;
  personImg: string;
  date: string;
  checkboxValue: boolean;
}

const CardsList = () => {
  const { formDataList } = useSelector((state: RootState) => state.form);

  return (
    <section className="cards">
      {formDataList?.map((card: ICardData, index: number) => (
        <div className="card" key={index}>
          <CardImage imageCard={card.image} />
          <div className="card_title" role="title">
            {card.title}
          </div>
          <CardInfo person={card.person} personImg={card.personImg} date={card.date} />
        </div>
      ))}
    </section>
  );
};

export default CardsList;
