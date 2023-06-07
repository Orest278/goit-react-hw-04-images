import { useState } from 'react'
import s from "../css/styles..module.css"

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

export default Searchbar
