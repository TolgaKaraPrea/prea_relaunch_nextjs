import styled from 'styled-components';

const PageLayout = ({ children }) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default PageLayout;
