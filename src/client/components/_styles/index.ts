import { css } from "@emotion/core";
import styled from "@emotion/styled";

export const component = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const componentInner = css`
  padding: 20px;
  max-width: 1200px;
  width: 100%;
`;

export const ComponentContainer = styled.section`
  ${component}
`;

export const ComponentInner = styled.div`
  ${componentInner}
`;
