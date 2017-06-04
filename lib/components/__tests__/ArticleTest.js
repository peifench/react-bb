import React from 'react';
import { Article } from '../Article';
import renderer from 'react-test-renderer';

describe('Article', () => {

  it('renders correctly', () => {
    const tree = renderer.create(
      <Article article={{}} author={{}} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
