import React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';

describe('ArticleList', () => {

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList articles={{
        a: { id: 'a' },
        b: { id: 'b' },
      }} />
    );

    expect(wrapper.find('ArticleContainer').length).toBe(2);

    expect(wrapper).toMatchSnapshot();
  });

});
