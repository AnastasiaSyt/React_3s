import React from 'react';
import '../styles/Form.css';

class TitleForm extends React.Component {
  render() {
    return (
      <form className="form_post">
        <label>
          <span>Title for post:</span>
          <input type="textareas" required />
        </label>
        <label>
          <span>date of post:</span>
          <input type="date" required />
        </label>
        <label>
          <span>choose an author</span>
          <select>
            <option>Select color</option>
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
      </form>
    );
  }
}

export default TitleForm;
