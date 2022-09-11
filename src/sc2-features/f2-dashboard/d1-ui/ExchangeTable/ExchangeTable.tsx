import React from 'react';
import s from './ExchangeTable.module.scss'
import {TableHeaders} from "./TableHeaders/TableHeaders";
import {RatesType} from "../../d2-bll/dashboardReducer";
import {uid} from "../../../../sc3-utils/utilityFunctions";
import {BeautyDate} from "../../../../sc1-main/m1-ui/common/components/BeautyDate/BeautyDate";
import {EXCHANGE_TABLE_HEADERS} from "../../../../sc3-utils/config";


type ExchangeTablePropsType = {
  rates: RatesType[]
  base: string
  date: number
}
export const ExchangeTable: React.FC<ExchangeTablePropsType> = (
  {
    rates,
    base,
    date,
  }
) => {

  return (
    <div className={s.tableMain}>
      <table>
        <caption className={s.tableTitle}>
          <span>Курсы валют на</span>
          <BeautyDate date={date}/>
        </caption>
        <TableHeaders headers={EXCHANGE_TABLE_HEADERS}/>
        <tbody>
        {rates?.map(el => {
          return <React.Fragment key={uid()}>
            {el.key !== base &&
              <tr>
                <td>{el.key}</td>
                <td className={s.nameStyle}>{el.title}</td>
                <td>{(1 / el.value).toFixed(2)}</td>
              </tr>
            }
          </React.Fragment>
        })}
        </tbody>
      </table>
    </div>
  );
};
