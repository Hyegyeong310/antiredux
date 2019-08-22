import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import AppPresenter from './AppPresenter';
import Store from 'store';

const GlobalStyle = createGlobalStyle`
${reset};
body {
    background-color:#ecf0f1;
}
`;

class AppContainer extends Component {
  state = {
    message: 'Hello'
  };
  render() {
    return (
      <Store.Provider value={this.state.message}>
        <GlobalStyle />
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
