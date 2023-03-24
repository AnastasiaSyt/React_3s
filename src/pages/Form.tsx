import React from 'react';
import CardItem from '../components/CardItem';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.titleRef = React.createRef();
    this.contentRef = React.createRef();
    this.authorRef = React.createRef();
    this.publishRef = React.createRef();
    this.fileRef = React.createRef();
    this.state = {
      posts: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Создание нового объекта Post на основе значений рефов
    const newPost = {
      id: 7,
      image: this. fileRef.current.files[0],
      title: this.titleRef.current.value,
      person_img: '../public/jason.png',
      person: this.authorRef.current.value,
      date: this.contentRef.current.value,
    };
    // Добавление нового поста в массив постов
    this.setState({ posts: [...this.state.posts, newPost] });
    // Очистка значений рефов после отправки формы
    this.titleRef.current.value = '';
    this.contentRef.current.value = '';
    this.authorRef.current.value = '';
    this.fileRef.current.value = null;
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h1 className="main_title">Form</h1>
          This is form to create new post
          <div className="form">
            <div>
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title for post:</label>
                <input type="text" id="title" ref={this.titleRef} />

                <label htmlFor="date">date of post:</label>
                <input type="date" id="date" ref={this.contentRef} />

                <label htmlFor="author">choose an author:</label>
                <select type="select" id="author" ref={this.authorRef}>
                  <option>Select author</option>
                  <option value="Tracey Wilson">Tracey Wilson</option>
                  <option value="Jason Francisco">Jason Francisco</option>
                  <option value="Elizabeth Slavin">Elizabeth Slavin</option>
                  <option value="Ernie Smithn">Ernie Smithn</option>
                  <option value="Eric Smith">Eric Smith</option>
                </select>

                <label htmlFor="publish">publish this post</label>
                <input type="checkbox" id="publish" ref={this.publishRef} />

                <label htmlFor="file">load image for this post</label>
                <input type="file" id="file" ref={this.fileRef} />

                <button type="submit">Submit</button>
              </form>
              {/* Отображение всех созданных постов */}s
              {/* <CardItem key={index} item={this.post} /> */}
              {this.state.posts.map((post, index) => (
                <CardItem key={index} item={post} image={post.image}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
