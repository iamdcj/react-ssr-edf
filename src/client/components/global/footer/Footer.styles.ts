import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  background-color: #000;
  color: #fff;
`;

const FooterInner = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
`;

export { FooterContainer, FooterInner };
