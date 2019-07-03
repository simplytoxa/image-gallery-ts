import React, { Component, Fragment } from "react";
import Toolbar from "./containers/Toolbar";
import Gallery from "./containers/Gallery";
import Modal from './containers/Modal';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

class App extends Component {
  onFileDrop = file => {
    this.setState({ file });
  };

  searchChangeHandler = term => {
    if (!term.length) {
      return this.fetchImages();
    }

    if (term && term.length > 2) {
      const images = this.state.images;
      const filteredImages = images.filter(img =>
        img.name.toLowerCase().includes(term.toLowerCase())
      );

      if (!filteredImages.length) {
        return;
      }
      if (
        images.length === filteredImages.length &&
        images[0].name === filteredImages[0].name
      ) {
        return;
      }

      return this.setState({ images: filteredImages });
    }
  };

  render() {
    return (
      <Fragment>
        <Header>
          <Toolbar />
        </Header>
        <Main>
          <Gallery />
        </Main>
        <Modal />
      </Fragment>
    );
  }
}
export default App;
