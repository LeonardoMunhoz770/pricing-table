import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 384px;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 32px;
  border-radius: 10px;
  border: 1px solid var(--color-gray-200);
  @media (max-width: 410px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderPlan = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Description = styled.h2`
  font-weight: 100;
  font-size: 14px;
  color: var(--color-purple-100);
  font-weight: bold;
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");
  font-family: "Titillium Web", sans-serif;
  padding-bottom: 8px;
`;

export const PricePlan = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 400px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Plan = styled.label`
  color: var(--color-gray-50);
  font-size: 32px;
  font-weight: bold;
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");
  font-family: "Titillium Web", sans-serif;
`;

export const Price = styled.label`
  color: var(--color-gray-50);
  font-weight: bold;
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");
  font-family: "Titillium Web", sans-serif;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const TopAdvantge = styled.div`
  width: 133px;
  height: 34px;
  background-color: var(--color-orange);
  border-radius: 6px;
  color: var(--color-gray-900);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -17px;
  left: 541.5px;
  @media (max-width: 1250px) {
    position: relative;
    left: 93px;
    top: -67px;
  }
`;

export const Label = styled.label`
  @import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");
  font-family: "Titillium Web", sans-serif;
  font-size: 12px;
  font-weight: bold;
`;

export const ContentInformationsPlan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
