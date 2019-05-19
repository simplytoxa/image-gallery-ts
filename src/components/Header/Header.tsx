import React, { PropsWithChildren } from "react";
import "./Header.css";

export interface HeaderProps {}

const Header = (props: PropsWithChildren<HeaderProps>) => (
  <header className="Header">{props.children}</header>
);

export default Header;
