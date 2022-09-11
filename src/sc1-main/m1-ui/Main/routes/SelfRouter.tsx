import React from 'react';
import {Error404} from "../Error404/Error404";
import {Navigate, Route, Routes} from "react-router-dom";
import {Converter} from "../../../../sc2-features/f1-converter/c1-ui/Converter";
import {Dashboard} from "../../../../sc2-features/f2-dashboard/d1-ui/Dashboard";


export const PATH = {
  DASHBOARD: '/dashboard',
  CONVERTER: '/converter',
}

export const SelfRouter = () => {

  return (
      <Routes>
        <Route path={'/'} element={<Navigate to={PATH.CONVERTER}/>}/>
        <Route path={PATH.CONVERTER} element={<Converter/>}/>
        <Route path={PATH.DASHBOARD} element={<Dashboard/>}/>
        <Route path={'*'} element={<Error404/>}/>
      </Routes>
  );
};

