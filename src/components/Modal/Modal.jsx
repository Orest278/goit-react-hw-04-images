import React, { Component } from 'react';
import s from '../css/styles..module.css'

export class Modal extends Component {
  closeByEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeByBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }

  render() {
    const { modalImage } = this.props;

    return (
      <div className={s.Overlay} onClick={this.closeByBackdrop}>
        <div className={s.Modal}>
          <img src={modalImage.src} alt={modalImage.alt} />
        </div>
      </div>
    );
  }
}

export default Modal;