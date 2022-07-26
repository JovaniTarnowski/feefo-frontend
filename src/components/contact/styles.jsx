import styled from "styled-components";
import theme from "../../styles.colors";

export const Sales = styled.div`
  background-color: ${() => theme.white};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 5px;
`;

export const SalesPadding = styled.div`
  text-align: start;
  padding: 5px;
`;

export const BoldAttribute = styled.span`
  font-weight: bold;
`;

export const Percentage = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
`;

export const BisGreen = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: ${() => theme.green};
`;

export const UpperCase = styled.div`
  font-weight: uppercase;
`;

export const HeadCard = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: start;

  &:first-child {
    padding: 10px;
  }

  &:nth-child(2) {
    padding: 10px;
  }
`;

export const PercentageSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;

  & div {
    flex-grow: 1;
    text-align: start;
  }
`;

export const PercentageElement = styled.div`
  padding: 15px;
  border-top: 2px solid ${() => theme.lightGrey};

  &:first-child {
    border-right: 2px solid ${() => theme.lightGrey};
  }
`;
