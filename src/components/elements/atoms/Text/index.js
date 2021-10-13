import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size + 'px'};
  line-height: ${({ height }) => height + 'px'};
`;

const Text = ({ color, weight, size, height, children }) => {
  return (
    <StyledText weight={weight} color={color} size={size} height={height}>
      {children}
    </StyledText>
  );
};
export default Text;
