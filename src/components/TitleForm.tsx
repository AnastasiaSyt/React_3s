import React, { type RefObject, type LegacyRef } from 'react';
import { type TCardItem } from 'types/card_type';
import '../styles/Form.css';
import CardItem from './CardItem';
import OriginalButton from './UI/Button/OriginalButton';
import OriginalInput from './UI/Input/OriginalInput';

class TitleForm extends React.Component {
  textInput: string | ((instance: HTMLInputElement | null) => void) | RefObject<HTMLInputElement>;
  item: TCardItem | undefined;
  textDate: React.RefObject<unknown>;

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
    this.textInput = React.createRef();
    this.textDate = React.createRef();
    this.item = {
      id: 0,
      image: '../public/2.jpg',
      title: this.textInput.current?.value,
      person_img: '../public/jason.png',
      person: 'Jason Francisco',
      date: this.textDate.current?.value,
    };
  }

  // handleSubmit(event: { preventDefault: () => void }) {
  //   alert(this.textInput.current.value);
  //   event.preventDefault();
  // }

  addNewCard(event: { preventDefault: () => void }) {
    event.preventDefault();
    const newCard = {
      title: this.textInput.current.value,
      date: this.textDate.current.value,
      r: 'jjj',
    };
    console.log(newCard);
  }

  render() {
    return (
      <>
        <>
          <form className="form_post">
            <label>
              <span>Title for post:</span>
              <OriginalInput type="textareas" ref={this.textInput} required />
            </label>
            <label>
              <span>date of post:</span>
              <OriginalInput type="date" ref={this.textDate} required />
            </label>
            <label>
              <span>choose an author</span>
              <select>
                <option>Select person</option>
                <option value="Tracey Wilson">Tracey Wilson</option>
                <option value="Jason Francisco">Jason Francisco</option>
                <option value="Elizabeth Slavin">Elizabeth Slavin</option>
                <option value="Ernie Smithn">Ernie Smithn</option>
                <option value="Eric Smith">Eric Smith</option>
              </select>
            </label>
            <label>
              <span>publish this post</span>
              <input type="checkbox" />
            </label>
            <label>
              <input type="file" />
              <button type="submit">Upload</button>
            </label>
            <label>
              <OriginalButton onClick={this.addNewCard} type="submit">
                Create post
              </OriginalButton>
            </label>
          </form>
        </>
        <>
          <CardItem item={this.item} />
        </>
      </>
    );
  }
}

export default TitleForm;
