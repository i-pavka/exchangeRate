import React from 'react';
import s from './Header.module.scss';
import {PATH} from "../routes/SelfRouter";
import {NavLink} from "react-router-dom";


export const Header = () => {
  return (
    <header className={s.headerMain}>
      <nav className={s.navbarMain}>
        <ul className={s.navbarList}>
          <SelfNavLink urlPath={PATH.CONVERTER} title={'Converter'}/>
          <SelfNavLink urlPath={PATH.DASHBOARD} title={'Dashboard'}/>
        </ul>
      </nav>
    </header>
  );
};

const SelfNavLink = ({urlPath, title}: { urlPath: string, title: string }) => {
  return (
    <NavLink to={urlPath}>
      {({isActive}) => (
        <span className={isActive ? `${s.navItem} ${s.active}` : s.navItem}>{title}</span>
      )}
    </NavLink>
  )
}