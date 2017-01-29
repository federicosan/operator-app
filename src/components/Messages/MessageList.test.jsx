import React from 'react';

import { shallow } from 'enzyme';

import MessageList from './MessageList.jsx';

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({ })),
};

describe('Chat', () => {
  it('matches snapshot', () => {
    const component = shallow(<MessageList store={store} />);

    expect(component).toMatchSnapshot();
  });
});
