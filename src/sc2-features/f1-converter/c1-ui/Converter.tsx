import React, {useState} from 'react';
import s from './Converter.module.scss'
import {useAppSelector} from "../../../sc1-main/m2-bll/store";
import {convertHistorySelector} from "../c2-bll/selectors/convertSelectors";
import {Search} from "./Search/Search";
import {loadingSelector} from "../../../sc1-main/m2-bll/selectors/appSelectors";
import {Spinner} from "../../../sc1-main/m1-ui/common/components/Spinner/Spinner";
import {ConvertHistory} from "./ConvertHistory/ConvertHistory";
import {ConvertResult} from "./ConvertResult/ConvertResult";

export const Converter = () => {

  const convertHistory = useAppSelector(convertHistorySelector);
  const isLoading = useAppSelector(loadingSelector);
  const [incorrectValue, setIncorrectValue] = useState('');

  return (
    <div className={s.converterMain}>

      <div className={s.searchTip}>
        <h3>
          Введите данные в формате:
          <p>"10 usd in rub"</p>
        </h3>
      </div>

      <div className={s.inputBlock}>
        <Search setIncorrectValue={setIncorrectValue}/>
      </div>

      <div className={s.convertResultWrapper}>
        {isLoading
          ? <Spinner customMainStyle={s.spinnerStyle}/>
          : <ConvertResult incorrectValue={incorrectValue}/>
        }
        <ConvertHistory convertHistory={convertHistory}/>
      </div>

    </div>
  );
};
