import React from "react";
import Toolbar from "./containers/Toolbar";
import Gallery from "./containers/Gallery";
import Modal from "./containers/Modal";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

const App = () => (
  <>
    <Header>
      <Toolbar />
    </Header>
    <Main>
      <Gallery />
    </Main>
    <Modal />
  </>
);

export default App;
