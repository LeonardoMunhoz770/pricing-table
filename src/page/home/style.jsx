import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  height: 100%;
`;

export const Container = styled.section`
  width: 1216px;
  height: 454px;
  display: flex;
  gap: 32px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  @media (max-width: 1250px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 24px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;
