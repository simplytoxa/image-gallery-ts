import React, { PureComponent } from 'react';
import './Search.css';
import PropTypes from 'prop-types';

class Search extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: ''
  };

  handleChange = event => {
    const term = event.target.value;
    this.setState({value: event.target.value});
    this.props.onChange(term);
  };

  clearSearchHandler = () => {
    this.setState({ value: '' });
    this.props.onChange('');
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
