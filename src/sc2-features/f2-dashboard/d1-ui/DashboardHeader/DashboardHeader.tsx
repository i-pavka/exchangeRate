import React from 'react';
import s from "./DashboardHeader.module.scss";
import {SuperSelect} from "../../../../sc1-main/m1-ui/common/components/SuperSelect/SuperSelect";
import {BASE_SYMBOLS} from "../../../../sc3-utils/config";

type DashboardHeaderPropsType = {
  base: string
  changeBaseHandler: (quantity: string) => void
}
export const DashboardHeader: React.FC<DashboardHeaderPropsType> = (
  {
    base,
    changeBaseHandler,
  }
) => {

  return (
    <section className={s.baseCurrency}>
      <h3>Базовая валюта</h3>
      <div>
        <SuperSelect options={BASE_SYMBOLS}
                     value={base}
                     onChangeOption={changeBaseHandler}/>
      </div>
    </section>
  );
};
