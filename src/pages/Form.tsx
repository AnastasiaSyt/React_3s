/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import '../styles/Form.css';
import '../styles/Card.css';
import { useForm, Controller } from 'react-hook-form';
import CardForm from '../components/CardForm';
import CardsList from '../components/form/CardsList';

interface IInputsForm {
  image: FileList;
  title: string;
  person: string;
  personImg: string;
  date: string;
  checkboxValue: boolean;
}

export default function Form() {
  const [formDataList, setFormDataList] = useState<IInputsForm[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputsForm>({ mode: 'onChange' });

  const onSubmit = (data: IInputsForm) => {
    const fileCopy = Object.assign({}, data);
    fileCopy.image = { ...data.image };
    setIsSuccess(true);
    setFormDataList([...formDataList, fileCopy]);
    reset();
    console.log(fileCopy);
  };

  const handleChange = () => {
    setIsSuccess(false);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="main_title">Form</h1>
        This is form to create new post
        <div className="form">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleChange} className="form_post">
              <div>
                <label htmlFor="title" className="form_label">
                  Title for post:
                </label>
                <input
                  type="text"
                  {...register('title', {
                    required: 'Title is require field',
                    pattern: {
                      value: /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/,
                      message: 'Title must contain only letters and numbers',
                    },
                  })}
                  id="title"
                  className="form_input"
                  name="title"
                  placeholder="Title"
                />
                {errors?.title != null && <span className="error">{errors.title.message}</span>}
              </div>

              <div>
                <label htmlFor="date" className="form_label">
                  Date of post:
                </label>
                <input
                  type="date"
                  id="date"
                  {...register('date', { required: 'Date is require field' })}
                  className="form_input"
                  name="date"
                  placeholder="Date"
                />
                {errors.date != null && <span className="error">{errors.date.message}</span>}
              </div>

              <label htmlFor="person" className="form_label">
                Choose an author:
              </label>
              <Controller
                name="person"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="form_input"
                    {...register('person', { required: 'Select is require field' })}
                  >
                    <option value="">Select author</option>
                    <option value="Tracey Wilson">Tracey Wilson</option>
                    <option value="Jason Francisco">Jason Francisco</option>
                    <option value="Elizabeth Slavin">Elizabeth Slavin</option>
                    <option value="Ernie Smithn">Ernie Smithn</option>
                    <option value="Eric Smith">Eric Smith</option>
                  </select>
                )}
              />
              {errors.person != null && <span className="error">Choose author</span>}

              <div>
                <label htmlFor="checkboxValue" className="form_label">
                  Publish this post
                </label>
                <Controller
                  name="checkboxValue"
                  control={control}
                  defaultValue={false}
                  render={() => (
                    <input
                      type="checkbox"
                      className="form_input"
                      id="checkboxValue"
                      {...register('checkboxValue', { required: true })}
                    />
                  )}
                />
                {errors.checkboxValue != null && (
                  <span className="error">This field is required</span>
                )}
              </div>

              <div className="all_radio">
                <label className="form_label">Choose your avatar:</label>
                <div className="radio_container">
                  <input
                    className="radio"
                    type="radio"
                    value="../public/tracy.png"
                    {...register('personImg', { required: true })}
                  />{' '}
                  <img className="radio-tile" src="../public/tracy.png" />
                </div>
                <div className="radio_container">
                  <input
                    type="radio"
                    className="radio"
                    value="../public/jason.png"
                    {...register('personImg', { required: true })}
                  />{' '}
                  <img className="radio-tile" src="../public/jason.png" />
                </div>
                <div className="radio_container">
                  <input
                    type="radio"
                    className="radio"
                    {...register('personImg', { required: true })}
                    value="../public/lizzy.png"
                  />{' '}
                  <img className="radio-tile" src="../public/lizzy.png" />
                </div>
                <div className="radio_container">
                  <input
                    type="radio"
                    className="radio"
                    {...register('personImg', { required: true })}
                    value="../public/ernie.png"
                  />{' '}
                  <img className="radio-tile" src="../public/ernie.png" />
                </div>
                <div className="radio_container">
                  <input
                    type="radio"
                    className="radio"
                    {...register('personImg', { required: true })}
                    value="../public/eric.png"
                  />{' '}
                  <img className="radio-tile" src="../public/eric.png" />
                </div>
                {errors.personImg != null && <span className="error">Choose avatar</span>}
              </div>

              <div>
                <label className="input-file">
                  <Controller
                    name="image"
                    control={control}
                    rules={{ required: true }}
                    render={() => (
                      <input
                        type="file"
                        {...register('image', { required: true })}
                        id="file"
                        accept="image/*"
                        name="image"
                      />
                    )}
                  />
                  <span>load image for this post</span>
                </label>
                {errors.image != null && <span className="error">This field is required</span>}
              </div>

              <button type="submit" className="button_submit">
                Submit
              </button>
            </form>

            {/* {isSuccess && <div className="valid">A new card has been created</div>}
            {formDataList !== null && (
              <div className="cards">
                {formDataList.map((formData, index) => (
                  <CardForm imageCard={formData.image[0]} {...formData} key={index} />
                ))}
              </div>
            )} */}
            <CardsList />
          </div>
        </div>
      </div>
    </div>
  );
}
