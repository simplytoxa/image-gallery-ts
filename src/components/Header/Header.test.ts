import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Header from './Header';

describe('<Header>', () => {
  const wrapper = shallow(
    <Header>Header</Header>
  );
  it('should render a header', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
