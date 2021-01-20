import React from 'react'
import styled from 'styled-components';
import { GlobalTheme } from '../../styles/theme';
import MenuOption from './MenuOption';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ListIcon from '@material-ui/icons/List';


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
  /* ... */
`;




function Sidebar() {
    return (
        <SidebarContainer>
            <Logo alt="" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"/>
            <Menu>
               <MenuOption title = "Home" Icon = {HomeRoundedIcon}/>
               <MenuOption title = "Explore" Icon = {SearchRoundedIcon}/>
               <MenuOption title = "Library" Icon = {ListIcon}/>
            </Menu>
            {/* playlists */}
        </SidebarContainer>
    )
}

export default Sidebar
