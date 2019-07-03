import React, { PureComponent, ChangeEvent } from 'react';
import './Search.css';

export interface Props {
  handleSearch: (term: string) => void
}

class Search extends PureComponent<Props> {
  state = {
    value: ''
  };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const term = event.target.value;
      this.setState({value: event.target.value});
      this.props.handleSearch(term);
    }
  };

  clearSearchHandler = () => {
    this.setState({ value: '' });
    this.props.handleSearch('');
  };

  render() {
    return (
      <fieldset className="field-container">
        <input
          type="text"
          placeholder="Type the title..."
          className="field"
          value={this.state.value}
          onChange={this.handleChange}/>
        <div className="icons-container">
          <div className="icon-search"/>
          <div className="icon-close" onClick={this.clearSearchHandler}>
            <div className="x-up"/>
            <div className="x-down"/>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default Search;
