import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
  TOKEN_COLOR_BASE_WHITE,
  TOKEN_COLOR_BACKGROUND_BASE
} from '@eltongarbin/tokens/dist/web/tokens';

import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${TOKEN_COLOR_BACKGROUND_BASE};
    margin: 0;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const GroupButton = styled.div`
  background-color: ${TOKEN_COLOR_BASE_WHITE};
  margin: auto;
  display: flex;
  padding: 10px;

  button {
    margin: 4px;
    width: 200px;
  }
`;

function App() {
  return (
    <Fragment>
      <GroupButton>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </GroupButton>
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
