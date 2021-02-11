import React from 'react'
import styled from 'styled-components';
import { GlobalTheme } from '../../styles/theme';


import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';
import { OverridableTypeMap } from '@material-ui/core/OverridableComponent';


const SidebarContainer = styled.div`
  background: ${GlobalTheme.colors.grey};
  position: fixed;
  top:0;
  left: 0;
  width: 224px;
  height:100%;
  display:flex;
  flex-direction: column;
  

  
`;

const Logo = styled.img`
  max-width:150px;
  object-fit: contain;
  margin: 20px 30px;
`;


const Menu = styled.div`
  margin-left:10px;
`;



const Option = styled.div`
  
  display: flex;
  align-items:center;
  padding-left:10px;
  color: gray;
  :hover {
      color: white;
      border-left: 4px solid #66D36E;
    }
`;


const MenuOptions = styled.div`
  position: absolute;
  left:0;

  }
`;

const styledMenuTitles = {marginLeft:'15px'}


const Sidebar= () =>{
    return (
        <SidebarContainer>
            <Logo alt="" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"/>
            <Menu>
               <MenuOptions>
                  <Option>
                      <HomeRoundedIcon/>
                      <h3 style={styledMenuTitles}>Home</h3>
                  </Option>
                  <Option>
                      <SearchRoundedIcon/>
                      <h3 style={styledMenuTitles}>Search</h3>
                  </Option>
                  <Option>
                      <VideoLibraryRoundedIcon/>
                      <h3 style={styledMenuTitles}>Library</h3>
                  </Option>
               </MenuOptions>
            </Menu>
            {/* playlists */}
        </SidebarContainer>
    )
}

export default Sidebar
