import React from 'react'
import styled from 'styled-components';
import PropTypes, { any, InferProps } from "prop-types";
import { SvgIcon } from '@material-ui/core';




const OptionContainer = styled.div`
  /* ... */
`;

MenuOption.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: type SvgIcon
}

export default function MenuOption({title, Icon}: InferProps<typeof MenuOption.propTypes>) {
    return (
        <OptionContainer>
          {Icon}
          <h3>{title}</h3>      
        </OptionContainer>
    )
}


