import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GalleryItem from './GalleryItem';

configure({ adapter: new Adapter() });

describe('<GalleryItem />', () => {
  const item = {
    name: 'Name',
    path: 'Path'
  };
  let wrapper = shallow(<GalleryItem item={item} />);

  it('should render span element with item name', () => {
    expect(wrapper.find('span').text()).toEqual('Name');
  });
});