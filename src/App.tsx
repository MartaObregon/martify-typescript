import React from 'react';

import styled from 'styled-components';
import Player from './components/player/Player';
import Sidebar from './components/sidebar/Sidebar';

import  {GlobalTheme} from "./styles/theme"


const AppContainer = styled.div`
  height:100vh;
`;



function App() {
  return (
    <AppContainer>
      <Sidebar/>
      <Player/>
     </AppContainer>
     

  );
}

export default App;
