import React from 'react';
import s from '../Converter.module.scss'
import {useAppSelector} from "../../../../sc1-main/m2-bll/store";
import {convertDataSelector} from "../../c2-bll/selectors/convertSelectors";

export const ConvertResult = ({incorrectValue} : {incorrectValue: string}) => {

  const {result, query} = useAppSelector(convertDataSelector);

  return (
    <div className={s.convertResult}>
      {incorrectValue && incorrectValue}
      {result && !incorrectValue &&
        <div>{query.amount} {query.from} = {result.toFixed(3)} {query.to}</div>
      }
    </div>
  );
};
