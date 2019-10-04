import React, { memo } from 'react';
import Button from '../../UI/Button/Button';
import './Toolbar.css';
import Status from '../Status/Status';
import Search from '../../UI/Search/Search';

interface ToolbarProps {
    isModalOpen: boolean;
    toggleModal: (isOpenModal: boolean) => void;
    count: number;
    handleSearch: (term: string) => void;
}

const Toolbar = memo((props: ToolbarProps) => {
    const toggle = () => props.toggleModal(props.isModalOpen);

    return (
        <div className="Toolbar">
            <span className="Toolbar-logo">Gallery</span>
            <Search handleSearch={props.handleSearch} />
            <Status filesCount={props.count} />
            <Button type="button" onClick={toggle} className="Button Button-primary">
                Add photo
            </Button>
        </div>
    );
});

export default Toolbar;
