import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

const StyledMenuText = styled(Link)`
  color: var(--menu-text-color);
  font-size: 16px;
  text-decoration: none;
  line-height: 26px;
  font-weight: 400;
  margin: 0;
  transition: all ease-in-out 0.3s;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  .active {
    color: #ff253a;
  }

  &:hover {
    color: var(--moon-L4);
  }
`;

const MenuText = ({ color, targetedPath, children, disabled }) => (
  <StyledMenuText
    to={targetedPath}
    disabled={disabled}
    activeStyle={{ color: 'var(--moon-L6)', fontWeight: '600' }}
    color={color}
    partiallyActive={{ color: 'var(--moon-L6)', fontWeight: '600' }}
  >
    {children}
  </StyledMenuText>
);

export default MenuText;
