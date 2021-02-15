import React from 'react'
import styled from 'styled-components';
import { GlobalTheme } from '../../styles/theme';

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import { Slider } from '@material-ui/core';


const PlayerSectionContainer = styled.div`
  width:100%;
  height:96px;
  background-color: rgba(40, 40, 40, 1);
  position:fixed;
  bottom:0;
  left:0;
  display:flex;
  justify-content:space-between;

  
`;


const NowPlaying = styled.div`
    display: flex;
    align-items: center;
    color: white;
    max-width: 300px;
    flex: 0.4;

    
`

const PlayerContainer= styled.div`
    flex: 0.6;
    max-width: 300px;
    justify-content:center;
    padding: 0 100px;
    color: white;
   display:flex;
   flex-direction:column;
   align-items:center;
`

const ArtistPoster = styled.img`
    object-fit:contain;
    width:50px;
`

const PlayerIconGroup = styled.div``

const PlayingInfo = styled.div``

const IconGroup = styled.div``


function Player() {
    return (
        <PlayerSectionContainer>
            <NowPlaying>
                <ArtistPoster alt="" src="https://i.scdn.co/image/ab67706f00000003b375dcf72973b5f65abb3996"/>
                <PlayingInfo>
                    <p>Poison</p>
                    <p>Alice Cooper</p>
                </PlayingInfo>
                <IconGroup>
                    <FavoriteBorderOutlinedIcon/>
                    <AddOutlinedIcon/>
                </IconGroup>
            </NowPlaying>

            <PlayerContainer>
                <PlayerIconGroup>
                    <SkipPreviousOutlinedIcon/>
                    <PlayCircleOutlineOutlinedIcon/>
                    <SkipNextOutlinedIcon/>
                </PlayerIconGroup>
                

                <Slider  aria-labelledby="continuous-slider"/>
            </PlayerContainer>
        </PlayerSectionContainer>
    )
}

export default Player
