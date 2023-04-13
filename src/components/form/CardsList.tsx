import CardImage from '../CardImage';
import CardInfo from '../CardInfo';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCards } from './formsCardSlice';
import { type RootState } from '../../redux/store';

interface IStateCard {
  id: number;
  image: string;
  title: string;
  personImg: string;
  person: string;
  date: string;
  checkboxValue: boolean;
}

const CardsList = () => {
  const cards = useSelector((state: RootState) => state);
  console.log(cards);
  //   console.log(state);

  const RenderCards = cards.map((card: IStateCard) => (
    <div className="card" key={card.id}>
      <CardImage image={card.image} />
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
