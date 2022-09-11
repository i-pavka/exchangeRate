import React from 'react';
import s from './BeautyDate.module.scss'


type BeautyDateType = {
  date: number
}

export const BeautyDate: React.FC<BeautyDateType> = ({date}) => {

  return (
    <span className={s.beautyDateMain}>
      <span>{new Date(date * 1000).toLocaleDateString()} </span>
      <span>{new Date(date * 1000).toLocaleTimeString()}</span>
    </span>
  );
};
