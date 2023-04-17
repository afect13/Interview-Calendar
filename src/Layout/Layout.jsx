import styled from "styled-components";

const Div = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  min-height: 100vh;
  max-height: 100vh;
  max-width: 740px;
  background: #fafafa;
`;

const Layout = (props) => {
  return <Div>{props.children}</Div>;
};

export default Layout;
