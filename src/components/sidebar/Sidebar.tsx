import React from 'react'
import styled from 'styled-components';
import { GlobalTheme } from '../../styles/theme';


import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';

import AddBoxIcon from '@material-ui/icons/AddBox';


const SidebarContainer = styled.div`
  background: ${GlobalTheme.colors.grey};
  position: fixed;
  top:0;
  left: 0;
  height:100%;
  max-width:225px;
  display:flex;
  flex-direction: column;

  margin-bottom:100px;

`;

const Logo = styled.img`
  max-width:150px;
  object-fit: contain;
  margin: 20px 30px;
  cursor: pointer;
`;




const Option = styled.div`
  width:100%;
  display: flex;
  align-items:center;
  color: gray;
  line-height: ${GlobalTheme.font.sidebarLineHeight};
  cursor: pointer;
  padding-left: 20px;
  
  :hover {
      color: white;
      border-left: 4px solid ${GlobalTheme.colors.green};
    }
  
`;


const MenuOptions = styled.div`
  padding-bottom:50px;
`;

const MenuTitle = styled.h3`
  margin-left: 15px;
  font-size: ${GlobalTheme.font.mediumFont};
  font-weight: 600;
` 

const PlaylistContainer = styled.div`
  
  margin-left:20px;
  

`;

const PlaylistTitle = styled.h3`
  font-weight: 400;
  font-size: ${GlobalTheme.font.smallFont};
  letter-spacing: 0.25rem;
  opacity:0.8;
`;

const NewPlaylist = styled.div`
  display:flex;
  align-items: center;
  cursor:pointer;
  opacity: 60%;
  
  :hover{
    opacity: 1;
  }
`;


const ListPlaylists = styled.div`
  
  display:flex;
  flex-direction:column;
  margin:auto;
  max-height:400px;
  
  line-height: ${GlobalTheme.font.sidebarLineHeight};
  
  overflow-y:scroll;
  overflow-x:hidden;

  
  
 ::-webkit-scrollbar{
   display:none;
 }
  
 
`;

const OnePlaylist = styled.div`
  font-size: ${GlobalTheme.font.mediumFont};
  font-weight:500;
  opacity:0.5;
  
  cursor:pointer;

  :hover{
    opacity:1;
  }

`;



const Sidebar= () =>{

  const truncate = (str: string, n:number):string =>{
    return str?.length > n ? str.substr(0, n -1) + "...": str
  }


    return (
        <SidebarContainer>
            <Logo alt="" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"/>
               <MenuOptions>
                  <Option>
                      <HomeRoundedIcon/>
                      <MenuTitle>Home</MenuTitle>
                  </Option>
                  <Option>
                      <SearchRoundedIcon/>
                      <MenuTitle>Search</MenuTitle>
                  </Option>
                  <Option>
                      <VideoLibraryRoundedIcon/>
                      <MenuTitle>Library</MenuTitle>
                  </Option>
               </MenuOptions>
    
            <PlaylistContainer>
              <PlaylistTitle>PLAYLISTS</PlaylistTitle>
              <NewPlaylist>
                <AddBoxIcon style={{color: GlobalTheme.colors.white, fontSize: 35}}/>
                <h3 style={{
                  fontSize: GlobalTheme.font.mediumFont,
                  fontWeight: 700,
                  marginLeft:"7px"
                }}>New Playlist</h3>
              </NewPlaylist>

              <ListPlaylists>
                <OnePlaylist>{truncate('112312Rock save the queen and me', 10)}</OnePlaylist>
                
                
               
                
          
             
              </ListPlaylists>
            </PlaylistContainer>
        </SidebarContainer>
    )
}

export default Sidebar
