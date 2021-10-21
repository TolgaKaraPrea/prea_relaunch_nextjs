import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledTextLink = styled(Link)`
  color: var(--link-color);
  font-family: Inter;
  font-weight: 400;
  transition: all ease-in-out 0.3s;
  text-decoration: underline;
  &:hover {
    color: var(--sky-D4);
    text-decoration: none;
  }

  &.active {
    color: var(--sky-L6);
  }
`;

const StyledExternalLink = styled.a`
  color: var(--link-color);
  font-family: Inter;
  font-weight: 400;
  transition: all ease-in-out 0.3s;
  text-decoration: none;
  &:hover {
    color: var(--sky-D4);
    text-decoration: none;
  }

  &.active {
    color: var(--sky-L6);
  }
`;

const StyledTextLinkOne = styled(StyledTextLink)`
  font-size: 21px;
  line-height: 34px;
`;
const StyledTextLinkTwo = styled(StyledTextLink)`
  font-size: 21px;
  line-height: 31px;
`;

const StyledMenuLink = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  margin: 0;
`;

export const StyledOptionLink = styled(StyledMenuLink)`
  color: var(--moon-D2);
  transition: all ease-in-out 0.3s;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  &:hover {
    color: var(--moon-D4);
  }
  &.active {
    color: var(--moon-L6);
  }
`;

export const StyledDisableLink = styled(StyledMenuLink)`
  color: var(--moon-D5);
`;

export const ReadmoreLink = styled(Link)`
  font-size: 21px;
  line-height: 31px;
  color: var(--sky-L1);
  transition: all ease-in-out 0.3s;
  &:hover {
    color: var(--sky-L3);
  }
`;

export const StyledFooterLink = styled(Link)`
  color: var(--moon-M);
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  padding: 6px;
  &:hover {
    color: var(--moon-D2);
  }
`;

export const StyledFooterMediaLink = styled.a`
  color: var(--moon-M);
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  padding: 6px;
  &:hover {
    color: ${({ linkColor }) => linkColor || 'var(--footerLinkColor)'};
  }
`;

export const StyledExternalLinkOne = styled(StyledExternalLink)`
  font-size: 24px;
  line-height: 34px;

  p {
    color: var(--sky-M);
    text-decoration: underline;
    transition: all ease-in-out 0.3s;
    width: fit-content;
    &:hover {
      color: var(--sky-D4);
      text-decoration: none;
    }

    &.active {
      color: var(--sky-L6);
    }
  }
`;

export const StyledExternalLinkTwo = styled(StyledExternalLink)`
  font-size: 21px;
  line-height: 31px;
`;

export const StyledFooterSocialLink = styled.a`
  color: ${({ linkColor }) => linkColor || 'var(--footerLinkColor)'};
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  text-decoration: none;
  transition: all ease-in-out 0.3s;
  padding: 6px;
  &:hover {
    color: var(--moon-D2);
  }
`;

const TextLink = ({ type = 1, path, children, isNewTab }) => {
  switch (type) {
    case 1:
      return <StyledTextLinkOne to={`/${path}`}>{children}</StyledTextLinkOne>;
    case 2:
      return <StyledTextLinkTwo to={`/${path}`}>{children}</StyledTextLinkTwo>;
  }
};

export const ExternalLink = ({ type = 1, path, children }) => {
  switch (type) {
    case 1:
      return (
        <StyledExternalLinkOne href={`${path}`} target="__blank">
          {children}
        </StyledExternalLinkOne>
      );
    case 2:
      return (
        <StyledExternalLinkTwo href={`${path}`} target="__blank">
          {children}
        </StyledExternalLinkTwo>
      );
    case 'tel':
      return <StyledExternalLinkOne href={`tel:${path}`}>{children}</StyledExternalLinkOne>;
    case 'fax':
      return <StyledExternalLinkOne href={`fax:${path}`}>{children}</StyledExternalLinkOne>;
    case 'mail':
      return <StyledExternalLinkOne href={`mailto:${path}`}>{children}</StyledExternalLinkOne>;
  }
};

export default TextLink;
