import React from 'react';
import { Provider } from 'react-redux';
import createStore from './createStore';

export default function provideStore(component) {
  return <Provider store={createStore()}>{component}</Provider>;
}
