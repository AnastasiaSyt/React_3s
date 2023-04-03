/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import '../styles/Form.css';
import '../styles/Card.css';
import { useForm, Controller } from 'react-hook-form';
import CardForm from '../components/CardForm';

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

  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    reset,
  } = useForm<IInputsForm>({ mode: 'onChange' });

  const onSubmit = (data: IInputsForm) => {
    setFormDataList([...formDataList, data]);
    console.log(formDataList);
    console.log(data.image[0], data.checkboxValue);
    // reset();
  };

  // React.useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  // }, [reset, isSubmitSuccessful]);

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="main_title">Form</h1>
        This is form to create new post
        <div className="form">
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="form_post">
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
                <input
                  type="radio"
                  value="../public/tracy.png"
                  {...register('personImg', { required: true })}
                />{' '}
                <img src="../public/tracy.png" />
                <input
                  type="radio"
                  value="../public/jason.png"
                  {...register('personImg', { required: true })}
                />{' '}
                <img src="../public/jason.png" />
                <input
                  type="radio"
                  {...register('personImg', { required: true })}
                  value="../public/lizzy.png"
                />{' '}
                <img src="../public/lizzy.png" />
                <input
                  type="radio"
                  {...register('personImg', { required: true })}
                  value="../public/ernie.png"
                />{' '}
                <img src="../public/ernie.png" />
                <input
                  type="radio"
                  {...register('personImg', { required: true })}
                  value="../public/eric.png"
                />{' '}
                <img src="../public/eric.png" />
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

            {formDataList !== null && (
              <div className="cards">
                {formDataList.map((formData, index) => (
                  <CardForm imageCard={formData.image[0]} {...formData} key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
