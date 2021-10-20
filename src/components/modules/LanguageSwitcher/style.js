import styled from 'styled-components';

export const LanguageSwitcherWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const SwitcherParagraph = styled.p`
  color: ${({ active }) => (active ? 'var(--moon-L6)' : 'var(--moon-L2)')};
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  &:hover {
    color: var(--moon-L6);
  }
`;
