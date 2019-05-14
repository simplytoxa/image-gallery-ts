import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import Status from "../Status/Status";
import Search from "../../UI/Search/Search";

configure({ adapter: new Adapter() });

describe('<Toolbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toolbar />)
  });

  it('should render <Status /> element when filesCount recieved', () => {
    wrapper.setProps({filesCount: 5});
    expect(wrapper.find(Status)).toHaveLength(1);
  });

  it('should render <Search /> element', () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });
});