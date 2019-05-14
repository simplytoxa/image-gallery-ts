import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Search from './Search';

describe('<Search>', () => {
  const onChange = jest.fn();
  const wrapper = shallow( <Search onChange={onChange} /> );

  it('should pass a input value to the onChange', () => {
    const value = 'abc';
    expect(wrapper).toMatchSnapshot();

    wrapper.find('input').simulate('change', {
      target: { value },
    });

    expect(onChange).toBeCalledWith(value);
  });

  it( 'should clear the input value after click on clear button', () => {
    expect(wrapper).toMatchSnapshot();

    const input = wrapper.find('input');

    input.value = 'Test';
    expect(input.value).toEqual('Test');

    wrapper.find('.icon-close').simulate('click');
    expect(wrapper.state('value')).toBe('');

  });
});
