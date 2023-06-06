import { Component } from 'react'
import s from "../css/styles..module.css"

class Searchbar extends Component {
   state = {
    name: '',
    page: 1,
  };

	 handleChange = (e) => {
    const { value } = e.currentTarget;
    this.setState({ name: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmitHandler(this.state.name);
    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar
