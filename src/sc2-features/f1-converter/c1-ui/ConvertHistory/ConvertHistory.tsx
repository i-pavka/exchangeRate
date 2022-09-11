import React from 'react';
import {uid} from "../../../../sc3-utils/utilityFunctions";
import {ConvertHistoryType} from "../../c2-bll/convertReducer";
import {HISTORY_TABLE_HEADERS} from "../../../../sc3-utils/config";
import s from '../../../f2-dashboard/d1-ui/ExchangeTable/ExchangeTable.module.scss'
import {TableHeaders} from "../../../f2-dashboard/d1-ui/ExchangeTable/TableHeaders/TableHeaders";

export const ConvertHistory = ({convertHistory}: { convertHistory: ConvertHistoryType[] }) => {
  return (
    <>
      {convertHistory.length > 1
        && <div className={s.tableMain}>
          <table>
            <caption className={s.tableTitle}>
              <span>История запросов</span>
            </caption>
            <TableHeaders headers={HISTORY_TABLE_HEADERS}/>
            <tbody>
            {convertHistory.map((el, index) => {
              return <React.Fragment key={uid()}>
                <tr>
                  <td>{index + 1}</td>
                  <td className={s.nameStyle}>
                    {<div>{el.amount} {el.from} = {el.result.toFixed(3)} {el.to}</div>}
                  </td>
                </tr>
              </React.Fragment>
            })}
            </tbody>
          </table>
        </div>}
    </>
  );
};
