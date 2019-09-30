import React, { RefObject, useEffect } from 'react';
import Button from "../../UI/Button/Button";
import InputFile from "./InputFile/InputFile";
import './SendForm.css';
import Dropzone from "../Dropzone/Dropzone.component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SendFormProps {
  file: File,
  uploadImage: (formData: FormData) => void
  handleFileChange: (file: File) => void
  closeModal: () => void
}

const SendForm = (props: SendFormProps) => {
  const imgRef: RefObject<HTMLImageElement> = React.createRef();
  const warning = { 'color': 'red' };

  useEffect(() => {
    const imgSrc = imgRef.current && imgRef.current.src;
    props.file && createPreview(props.file);

    return () => {
      imgSrc && URL.revokeObjectURL(imgSrc);
    };
  });

  const uploadHandler = () => {
    const file: File = props.file;
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.set('imageFile', file, file.name);

    props.uploadImage(formData);
  };

  const inputFileChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const file = event.target && event.target.files[0];

    if (file) {
      createPreview(file);
      props.handleFileChange(file);
    }
  };

  const createPreview = (file: File) => {
    if (file && imgRef.current) {
      imgRef.current.className = 'SendForm__preview';
      imgRef.current.src = URL.createObjectURL(file);
    }
  };

  const onDrop = (file: File) => {
    createPreview(file);
    props.handleFileChange(file);
  };

  return (
    <form className="SendForm">
      <Dropzone border onDrop={onDrop}>

        <label className="SendForm__label">
          <img src="#" alt="Preview" className="hidden" ref={imgRef} />
          <div className="SendForm__image-container">
            {
              !props.file ?
                <FontAwesomeIcon icon="cloud-upload-alt" className="SendForm__icon" /> :
                null
            }
            <div className="SendForm__text" style={!props.file ? warning : {}}>
              Select a file or drag here
              </div>

            <InputFile onChange={inputFileChangeHandler} />
            <Button
              className="Button Button-primary SendForm_button"
              onClick={uploadHandler}>
              Upload a photo
              </Button>

            {/* {this.state.showAlreadyExistMessage &&
              <div className="success">The image is already uploaded! Please select another image.</div>} */}
          </div>

          {/* <ProgressBar progress={} /> */}
        </label>
      </Dropzone>
    </form>
  );
}

export default SendForm;