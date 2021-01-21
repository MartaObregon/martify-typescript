import React from 'react'
import styled from 'styled-components';
import { GlobalTheme } from '../../styles/theme';


import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded';

const SidebarContainer = styled.div`
  background: ${GlobalTheme.colors.grey};
  position: fixed;
  top:0;
  left: 0;
  width: 224px;
  height:100%

  
`;


const Logo = styled.img`
  max-width:150px;
  height:44px
`;


const Menu = styled.div`
  margin-left:10px;
`;

const MenuOption = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
`;




function Sidebar() {
    return (
        <SidebarContainer>
            <Logo alt="" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"/>
            <Menu>
               <MenuOption>
                   <h3>Home</h3>
                   <HomeRoundedIcon/>
               </MenuOption>
               <MenuOption>
                   <h3>Explore</h3>
                   <SearchRoundedIcon/>
               </MenuOption>
               <MenuOption>
                   <h3>Library</h3>
                   <VideoLibraryRoundedIcon/>
               </MenuOption>
            </Menu>
            {/* playlists */}
        </SidebarContainer>
    )
}

export default Sidebar
