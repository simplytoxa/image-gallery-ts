import React, { Component, Fragment } from "react";
import Toolbar from "./containers/Toolbar";
import Gallery from "./containers/Gallery";
import Modal from './containers/Modal';
import axios from "./axios-instance";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
    isModalOpen: false,
    images: [],
    file: null
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { file, images, isModalOpen } = this.state;
    return (
      images.length !== nextState.images.length ||
      file !== nextState.file ||
      isModalOpen !== nextState.isModalOpen
    );
  }

  fetchImages = () => {
    return axios.get("/images").then(res => {
      this.setState({
        images: res.data.images,
        count: res.data.count,
        file: null
      });
    });
  };

  toggleModal = (reload: boolean) => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen }));

    window.scrollTo(0, 0);

    const body = document.querySelector("body");
    body.classList.toggle("open-modal");

    if (!this.state.isModalOpen && reload) {
      this.fetchImages();
    }
  };

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
          <Toolbar
            onSearchChange={this.searchChangeHandler}
          />
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
