import React, { Fragment } from 'react';
import Button from '../../../UI/Button/Button';

interface Props {
    onChange: () => void;
}

const inputStyles = {
    display: 'none',
};

const InputFile = (props: Props) => {
    const inputRef = React.createRef<HTMLInputElement>();
    const handleInputClick = () => inputRef.current && inputRef.current.click();

    return (
        <Fragment>
            <input
                style={inputStyles}
                type="file"
                onChange={props.onChange}
                ref={inputRef}
                placeholder="Search"
                accept="image/*"
            />
            <Button type="button" className="Button Button-solid" onClick={handleInputClick}>
                Browse
            </Button>
        </Fragment>
    );
};

export default InputFile;
