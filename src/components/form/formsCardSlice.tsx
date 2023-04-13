import { createSlice } from '@reduxjs/toolkit';

interface IStateCard {
  id: number;
  image: string;
  title: string;
  personImg: string;
  person: string;
  date: string;
  checkboxValue: boolean;
}

const initialState = [
  {
    id: 1,
    image: '../public/1.jpg',
    title: 'Nature is a teacher – Just sit quietly under a tree',
    personImg: '../public/tracy.png',
    person: 'Tracey Wilson',
    date: 'February 20, 2023',
    checkboxValue: true,
  },
  {
    id: 2,
    image: '../public/2.jpg',
    title: 'Seeing with “fresh eyes” – A deeper nature experience',
    personImg: '../public/jason.png',
    person: 'Jason Francisco',
    date: 'February 18, 2023',
    checkboxValue: true,
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export const selectAllCards = (state: { cards: IStateCard[] }) => state.cards;

export default cardsSlice.reducer;
