import React, { useRef } from 'react';
import Button from '../../../UI/Button/Button';

interface Props {
    onChange: () => void;
}

const inputStyles = {
    display: 'none',
};

const InputFile = (props: Props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputClick = () => inputRef.current && inputRef.current.click();

    return (
        <>
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
        </>
    );
};

export default InputFile;
