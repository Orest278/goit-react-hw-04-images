import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import s from "../css/styles..module.css"

export const Loader = () => {
  return (
    <div className={s.Loader}>
      <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
    </div>
  );
};

export default Loader;