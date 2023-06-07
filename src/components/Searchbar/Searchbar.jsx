import { useState } from 'react'
import s from "../css/styles..module.css"
import PropTypes from 'prop-types'

const Searchbar = ({onSubmitHandler}) =>  {
  const [name, setName] = useState('');

	const handleChange = (e) => {
    const { value } = e.currentTarget;
   setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitHandler(name);
    reset();
  };

  const reset=()=> {
   setName('');
  }

    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            value={name}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

Searchbar.protoType = {
  onSubmitHandler: PropTypes.func.isRequired,
}

export default Searchbar
