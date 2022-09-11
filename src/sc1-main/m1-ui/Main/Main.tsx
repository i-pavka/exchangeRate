import React from 'react';
import s from './Main.module.scss'
import {Header} from "./Header/Header";
import {ProgressBar} from "../common/components/ProgressBar/ProgressBar";
import {useAppSelector} from "../../m2-bll/store";
import {loadingSelector} from "../../m2-bll/selectors/appSelectors";


export const Main = () => {

  const isLoading = useAppSelector(loadingSelector);

  return (
    <>
      <Header/>
      <div className={s.mainBlock}>
        {isLoading && <ProgressBar/>}
      </div>
    </>
  );
};
