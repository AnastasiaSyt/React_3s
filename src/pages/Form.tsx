import React from 'react';
import CardItem from '../components/CardItem';
import '../styles/Form.css';
import '../styles/Card.css';
import { type TNewPost, type FormProps, type FormState } from '../types/form_type';

class Form extends React.Component<FormProps, FormState> {
  titleRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  publishRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLSelectElement>;
  fileRef: React.RefObject<HTMLInputElement>;
  constructor(props: FormProps) {
    super(props);
    this.titleRef = React.createRef();
    this.dateRef = React.createRef();
    this.authorRef = React.createRef();
    this.publishRef = React.createRef();
    this.fileRef = React.createRef();
    this.state = {
      posts: [],
      titleValue: '',
      titleError: ' ',
      dateValue: '',
      dateError: ' ',
      selectValue: '',
      selectError: ' ',
      checkboxValue: false,
      checkboxError: ' ',
      imageFile: null,
      imageError: ' ',
      isValid: false,
    };
  }

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(
      'значение до проверки',
      this.state.isValid,
      this.state.titleError.length,
      this.state.dateError.length,
      this.state.selectError.length,
      this.state.checkboxError.length,
      this.state.imageError.length,
      this.state.titleValue.trim().length,
      this.state.checkboxValue
    );
    this.validateForm();
    console.log(
      'после проверки',
      this.state.isValid,
      this.state.isValid,
      this.state.titleError.length,
      this.state.dateError.length,
      this.state.selectError.length,
      this.state.checkboxError.length,
      this.state.imageError.length,
      this.state.imageError,
      this.state.titleValue.trim().length,
      this.state.checkboxValue
    );
  };

  createPost() {
    const { isValid } = this.state;
    // Создание нового объекта Post на основе значений рефов
    const newPost: TNewPost = {
      id: Number(new Date()),
      imageCard: this.fileRef.current!.files![0],
      title: this.titleRef.current!.value,
      person_img: '../public/jason.png',
      person: this.authorRef.current!.value,
      date: this.dateRef.current!.value,
    };
    // Добавление нового поста в массив постов
    if (isValid) {
      this.setState({ posts: [...this.state.posts, newPost] });
    } else if (!isValid) {
      alert('Invalid');
    }
    // Очистка значений рефов после отправки формы
    this.titleRef.current!.value = '';
    this.dateRef.current!.value = '';
    this.authorRef.current!.value = '';
    this.publishRef.current!.checked = false;
    this.fileRef.current!.value = '';
  }

  validateForm() {
    this.validateTitle();
    this.validateDate();
    this.validateSelect();
    this.validateCheckbox();
    this.validateFileImage();

    // Если нет ошибок валидации, выполняем обработку успешной отправки формы
    if (
      this.state.titleError.length === 0 &&
      this.state.dateError.length === 0 &&
      this.state.selectError.length === 0 &&
      this.state.checkboxError.length === 0 &&
      this.state.imageError.length === 0
    ) {
      // Ваш код для обработки успешной отправки формы

      this.setState({ isValid: true });
      console.log('поставить true', this.state.isValid);
      this.createPost();
    } else {
      this.setState({ isValid: false });
      console.log('поставить false', this.state.isValid);
      this.createPost();
    }
  }

  validateTitle() {
    const titleValue = this.titleRef.current?.value ?? '';

    if (titleValue.trim().length === 0) {
      this.setState({ titleError: 'This field is required' });
      return;
    } else {
      this.setState({ titleError: '' });
    }

    if (!/^[a-zA-Z0-9]+$/.test(titleValue)) {
      this.setState({ titleError: 'Only letters and numbers are allowed' });
    } else {
      this.setState({ titleError: '' });
    }
  }

  validateDate() {
    const dateValue = this.dateRef.current?.value ?? '';
    if (dateValue.trim().length === 0) {
      this.setState({ dateError: 'This field is required' });
    } else {
      this.setState({ dateError: '' });
    }
  }

  validateSelect() {
    const selectValue = this.authorRef.current?.value ?? '';

    if (selectValue.length === 0) {
      this.setState({ selectError: 'This field is required' });
    } else {
      this.setState({ selectError: '' });
    }
  }

  validateCheckbox() {
    // console.log(this.publishRef.current?.value);
    // const checkboxValue = this.publishRef.current?.value ?? '';
    if (!this.state.checkboxValue) {
      this.setState({ checkboxError: 'This field is required' });
    } else {
      this.setState({ checkboxError: '' });
    }
  }

  validateFileImage() {
    const imageFile = this.fileRef.current!.files![0];
    if (imageFile === null) {
      this.setState({ imageError: 'This field is required' });
    } else {
      this.setState({ imageError: '' });
    }
  }

  handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.checked);
    this.setState({ checkboxValue: !event.target.checked, checkboxError: '' });
    console.log(this.state.checkboxValue);
  };

  handleImageChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files;

    if (files?.[0] != null) {
      this.setState({ imageFile: files[0], imageError: '' });
    }
  };

  handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ selectValue: event.target.value, selectError: '' });
  };

  render() {
    const { titleError, dateError, selectError, checkboxError, imageError } = this.state;

    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="main_title">Form</h1>
          This is form to create new post
          <div className="form">
            <div>
              <form className="form_post" onSubmit={this.handleSubmit}>
                <div>
                  <label htmlFor="title" className="form_label">
                    Title for post:
                  </label>
                  <input
                    type="text"
                    id="title"
                    ref={this.titleRef}
                    className="form_input"
                    onChange={(event) => {
                      this.setState({ titleValue: event.target.value, titleError: '' });
                    }}
                  />
                  {titleError.length > 0 && <div className="error">{titleError}</div>}
                </div>

                <div>
                  <label htmlFor="date" className="form_label">
                    Date of post:
                  </label>
                  <input
                    type="date"
                    id="date"
                    ref={this.dateRef}
                    className="form_input"
                    onChange={(event) => {
                      this.setState({ dateValue: event.target.value, dateError: '' });
                    }}
                  />
                  {dateError.length > 0 && <div className="error">{dateError}</div>}
                </div>

                <div>
                  <label htmlFor="author" className="form_label">
                    Choose an author:
                  </label>
                  <select
                    id="author"
                    ref={this.authorRef}
                    className="form_input"
                    onChange={this.handleSelectChange}
                  >
                    <option value="">Select author</option>
                    <option value="Tracey Wilson">Tracey Wilson</option>
                    <option value="Jason Francisco">Jason Francisco</option>
                    <option value="Elizabeth Slavin">Elizabeth Slavin</option>
                    <option value="Ernie Smithn">Ernie Smithn</option>
                    <option value="Eric Smith">Eric Smith</option>
                  </select>
                  {selectError.length > 0 && <div className="error">{selectError}</div>}
                </div>

                <div>
                  <label htmlFor="publish" className="form_label">
                    Publish this post
                  </label>
                  <input
                    type="checkbox"
                    id="publish"
                    ref={this.publishRef}
                    className="form_input"
                    onChange={this.handleCheckboxChange}
                  />
                  {checkboxError.length > 0 && <div className="error">{checkboxError}</div>}
                </div>

                <div>
                  <label className="input-file">
                    <input
                      type="file"
                      id="file"
                      ref={this.fileRef}
                      accept="image/*"
                      onChange={this.handleImageChange}
                    />
                    <span>load image for this post</span>
                  </label>
                  {imageError.length > 0 && <div className="error">{imageError}</div>}
                </div>

                <button type="submit" className="button_submit">
                  Submit
                </button>
              </form>

              <div className="cards">
                {this.state.posts.map((post, index) => (
                  <CardItem key={index} item={post} imageCard={post.imageCard} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
