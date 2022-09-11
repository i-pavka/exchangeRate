import React from 'react';
import s from "./TableHeaders.module.scss";
import {uid} from "../../../../../sc3-utils/utilityFunctions";

export const TableHeaders = ({headers}: { headers: string[] }) => {

  return (
    <thead>
    <tr className={s.trStyle}>
      {headers.map(el => <th key={uid()}>{el} </th>)}
    </tr>
    </thead>
  );
};
