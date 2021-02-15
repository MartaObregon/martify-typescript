import React from 'react'
import styled from 'styled-components';
import { GlobalTheme } from '../../styles/theme';


const PlayerContainer = styled.div`
  width:100%;
  height:100px;
  background-color: rgba(40, 40, 40, 1);
  position:fixed;
  bottom:0;
  left:0;

  flex:1;
`;


function Player() {
    return (
        <PlayerContainer>
            
        </PlayerContainer>
    )
}

export default Player
