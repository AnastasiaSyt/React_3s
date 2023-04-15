import CardImage from '../CardImage';
import CardInfo from '../CardInfo';
import React from 'react';
import { useSelector } from 'react-redux';
import { type RootState } from '../form/store';

export interface ICardData {
  image: string;
  title: string;
  person: string;
  personImg: string;
  date: string;
  checkboxValue: boolean;
}

const CardsList = () => {
  const cards = useSelector((state: RootState) => state);
  console.log(cards);

  const RenderCards = cards.formDataList.map((card: ICardData, index: number) => (
    <div className="card" key={index}>
      <CardImage imageCard={card.image} />
      <div className="card_title" role="title">
        {card.title}
      </div>
      <CardInfo person={card.person} personImg={card.personImg} date={card.date} />
    </div>
  ));

  return (
    <section>
      <h2>cards</h2>
      {RenderCards}
    </section>
  );
};
export default CardsList;
