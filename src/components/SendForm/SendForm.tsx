import React, { Component } from 'react';
import Button from "../../UI/Button/Button";
import axios from '../../axios-instance';
import InputFile from "./InputFile/InputFile";
import './SendForm.css';
import Dropzone from "../Dropzone/Dropzone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgressBar from "../../UI/PorgressBar/ProgressBar";

const warning = {
  'color': 'red'
};

class SendForm extends Component {
  state = {
    selectedFile: null,
    progress: 0,
    showMessage: false,
    showAlreadyExistMessage: false
  };

  imgRef = React.createRef();

  componentDidMount() {
    if ( this.props.file ) {
      this.setState({ selectedFile: this.props.file });
      this.createPreview(this.props.file);
    }
  }

  uploadHandler = () => {
    const file = this.state.selectedFile || this.props.file;
    if ( !file ) {
      return this.setState({showMessage: true});
    }

    const formData = new FormData();
    formData.set( 'imageFile', file, file.name );

    axios.post( '/upload', formData, {
      onUploadProgress: progressEvent => {
        const progress = Math.round(progressEvent.loaded / progressEvent.total * 100);
        this.setState({ progress });
      }
    })
      .then(res => {
        if ( res.data.alreadyExist ) {
          return this.setState({ showAlreadyExistMessage: true, progress: 0 });
        }

        this.setState({ selectedFile: null });
        this.props.closeModal(true);
      })
      .catch(error => console.error(error));
  };

  inputFileChangeHandler = event => {
    const file = event.target.files[0];

    if ( file ) {
      this.createPreview(file);
      this.setState({ selectedFile: file, showAlreadyExistMessage: false });
    }
  };

  createPreview = file => {
    if ( file ) {
      this.imgRef.current.className = 'SendForm__preview';
      this.imgRef.current.src = URL.createObjectURL(file);
    }
  };

  onDrop = file => {
    this.createPreview(file);
    this.setState({ selectedFile: file });
  };

  render() {
    return (
      <form className="SendForm">
        <Dropzone border onDrop={this.onDrop}>

          <label className="SendForm__label">
            <img src="#" alt="Preview" className="hidden" ref={this.imgRef} />
            <div>
              {
                !this.state.selectedFile ?
                <FontAwesomeIcon icon="cloud-upload-alt" className="SendForm__icon" /> :
                null
              }
              <div
                className="SendForm__text"
                style={this.state.showMessage ? warning : {}}>Select a file or drag here</div>

              <InputFile onChange={this.inputFileChangeHandler} />
              <Button
                className="Button Button-primary SendForm_button"
                onClick={this.uploadHandler}>
                Upload a photo
              </Button>

              {this.state.showAlreadyExistMessage &&
              <div className="success">The image is already uploaded! Please select another image.</div>}
            </div>

            <ProgressBar progress={this.state.progress} />
          </label>
        </Dropzone>
      </form>
    );
  }
}

export default SendForm;