import React from 'react';
import styled from 'styled-components';

const StyledHeadingOne = styled.h1`
  color: ${({ color }) => color};
  margin: 0;
  font-size: 24px;
  line-height: 34px;
  font-weight: 600;
  letter-spacing: 2px;
`;
const StyledHeadingTwo = styled.h2`
  color: ${({ color }) => color};
  margin: 0;
  font-weight: 600;
  font-size: 58px;
  line-height: 68px;
`;
const StyledHeadingThree = styled.h3`
  color: ${({ color }) => color};
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  line-height: 58px;
  p {
    margin: 0;
  }
`;
const StyledHeadingFour = styled.h4`
  color: ${({ color }) => color};
  margin: 0;
  font-weight: 600;
  font-size: 38px;
  line-height: 48px;
`;
const StyledHeadingFive = styled.h5`
  color: ${({ color }) => color};
  margin: 0;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
`;
const StyledHeadingSix = styled.h6`
  color: ${({ color }) => color};
  margin: 0;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 80px;
  line-height: 68px;
`;

export const Heading = ({ color, type, isBold = true, children }) => {
  switch (type) {
    case 1:
      return (
        <StyledHeadingOne fontWeight={isBold ? 600 : 300} color={color}>
          {children}
        </StyledHeadingOne>
      );
    case 2:
      return (
        <StyledHeadingTwo fontWeight={isBold ? 600 : 400} color={color}>
          {children}
        </StyledHeadingTwo>
      );
    case 3:
      return (
        <StyledHeadingThree fontWeight={isBold ? 600 : 400} color={color}>
          {children}
        </StyledHeadingThree>
      );
    case 4:
      return (
        <StyledHeadingFour fontWeight={isBold ? 600 : 400} color={color}>
          {children}
        </StyledHeadingFour>
      );
    case 5:
      return (
        <StyledHeadingFive fontWeight={isBold ? 600 : 400} color={color}>
          {children}
        </StyledHeadingFive>
      );
    case 6:
      return (
        <StyledHeadingSix fontWeight={isBold ? 600 : 400} color={color}>
          {children}
        </StyledHeadingSix>
      );
    default:
      return (
        <StyledHeadingFive fontWeight={isBold ? 600 : 400} color={color}>
          {children}
        </StyledHeadingFive>
      );
  }
};
