import React, {useEffect, useState} from 'react';
import s from './Dashboard.module.scss'
import {dateSelector, exchangeSelector, isLoadingSelector} from "../d2-bll/selectors/dashboardSelectors";
import {useAppDispatch, useAppSelector} from "../../../sc1-main/m2-bll/store";
import {Spinner} from "../../../sc1-main/m1-ui/common/components/Spinner/Spinner";
import {ExchangeTable} from "./ExchangeTable/ExchangeTable";
import {DashboardHeader} from "./DashboardHeader/DashboardHeader";
import {checkRequestInterval} from "../../../sc3-utils/utilityFunctions";
import {changeBaseCurrency, toggleLoadingDashboard} from "../d2-bll/dashboardReducer";

export const Dashboard = () => {

  const dispatch = useAppDispatch();
  const {rates, base} = useAppSelector(exchangeSelector);
  const isLoading = useAppSelector(isLoadingSelector);
  const date = useAppSelector(dateSelector);
  const [isChangeBase, setIsChangeBase] = useState(false);

  useEffect(() => {
    const isRequestTime = checkRequestInterval(date);
    if(isRequestTime || isChangeBase) {
      dispatch(toggleLoadingDashboard({isLoading: true}));
    }
  }, [dispatch, base, isChangeBase]);

  const changeBaseHandler = (quantity: string) => {
    setIsChangeBase(quantity !== base)
    dispatch(changeBaseCurrency({base: quantity}));
  }

  return (
    <div className={s.dashboardMain}>
      {isLoading ? <Spinner/> :
        <>
          <DashboardHeader base={base} changeBaseHandler={changeBaseHandler}/>
          <ExchangeTable rates={rates} base={base} date={date}/>
        </>
      }
    </div>
  );
};
