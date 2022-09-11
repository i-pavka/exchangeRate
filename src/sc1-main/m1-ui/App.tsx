import React from 'react';
import s from './App.module.scss';
import {Main} from "./Main/Main";
import {SelfRouter} from "./Main/routes/SelfRouter";

export const App = () => (
  <main className={s.mainWrapper}>
    <Main/>
    <SelfRouter/>
  </main>
);

