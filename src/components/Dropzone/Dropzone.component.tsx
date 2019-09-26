import React, { useState, PropsWithChildren } from 'react';
import './Dropzone.component.css';

interface DropzoneProps extends PropsWithChildren<any> {
    onDrop: (file: File | null) => void;
}
const Dropzone = (props: DropzoneProps) => {
    const [hover, setHover] = useState(false);

    const dragOverHandler = (event: any) => {
        event.stopPropagation();
        event.preventDefault();

        switch (event.type) {
            case 'dragover':
                return setHover(true);
            case 'dragleave':
                return setHover(false);
            default:
                return setHover(false);
        }
    };

    const dropHandler = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        setHover(false);

        const file = event.dataTransfer && event.dataTransfer.files[0];
        const isValid = file && /\.(?=gif|jpg|png|jpeg)/gi.test(file.name);
        return isValid ? props.onDrop(file) : false;
    };

    return (
        <div
            className={hover ? 'Dropzone hover' : 'Dropzone'}
            onDragOver={dragOverHandler}
            onDragLeave={dragOverHandler}
            onDrop={dropHandler}
        >
            {props.children}
        </div>
    );
};

export default Dropzone;
