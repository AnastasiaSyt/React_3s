import React from 'react';
import CardItem from '../components/CardItem';
import '../styles/Form.css';
import '../styles/Card.css';

interface FormState {
  posts: TNewPost[];
  errors: {
    title: string;
  };
}

interface TNewPost {
  id: Date;
  image: string;
  title: string;
  person_img: string;
  person: string;
  date: Date;
}

interface FormProps {
  titleRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  publishRef: React.RefObject<HTMLInputElement>;
  authorRef: React.RefObject<HTMLSelectElement>;
  fileRef: React.RefObject<HTMLInputElement>;
}

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
      errors: {
        title: '',
        date: '',
      },
    };
  }

  handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    this.createPost();
  };

  createPost() {
    // Создание нового объекта Post на основе значений рефов
    const newPost: TNewPost = {
      id: new Date(),
      image: this.fileRef.current.files[0],
      title: this.titleRef.current.value,
      person_img: '../public/jason.png',
      person: this.authorRef.current.value,
      date: this.dateRef.current.value,
    };
    // Добавление нового поста в массив постов
    this.setState({ posts: [...this.state.posts, newPost] });
    // Очистка значений рефов после отправки формы
    this.titleRef.current.value = '';
    this.dateRef.current.value = '';
    this.authorRef.current.value = '';
    this.fileRef.current.value = null;
  }

  validateForm() {
    // const errors = {};
    if (this.titleRef.current?.value.trim() === '') {
      this.state.errors.title = 'Name is required';
    }
    if (this.state.date.trim() === '') {
      Error.date = 'Email is required';
    }
    if (state.password.trim() === '') {
      Error.password = 'Password is required';
    }
    setState({ ...state, Error });
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="main_title">Form</h1>
          This is form to create new post
          <div className="form">
            <div>
              <form className="form_post" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title for post:</label>
                <input type="text" id="title" ref={this.titleRef} className="form_input" />

                <label htmlFor="date">date of post:</label>
                <input type="date" id="date" ref={this.dateRef} className="form_input" />

                <label htmlFor="author">choose an author:</label>
                <select type="select" id="author" ref={this.authorRef} className="form_input">
                  <option>Select author</option>
                  <option value="Tracey Wilson">Tracey Wilson</option>
                  <option value="Jason Francisco">Jason Francisco</option>
                  <option value="Elizabeth Slavin">Elizabeth Slavin</option>
                  <option value="Ernie Smithn">Ernie Smithn</option>
                  <option value="Eric Smith">Eric Smith</option>
                </select>

                <label htmlFor="publish">publish this post</label>
                <input type="checkbox" id="publish" ref={this.publishRef} className="form_input" />

                {/* <label htmlFor="file">load image for this post</label>
                <input type="file" id="file" ref={this.fileRef} className="form_input" /> */}

                <label className="input-file">
                  <input type="file" id="file" ref={this.fileRef} />
                  <span>load image for this post</span>
                </label>

                <button type="submit" className="button_submit">
                  Submit
                </button>
              </form>
              {/* Отображение всех созданных постов */}
              {/* <CardItem key={index} item={this.post} /> */}
              <div className="cards">
                {this.state.posts.map((post, index) => (
                  <CardItem key={index} item={post} image={post.image} />
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
