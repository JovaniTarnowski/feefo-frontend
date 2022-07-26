import styled from "styled-components";

export const Support = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SupportContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserIcon = styled.div`
  background-color: ${({ theme }) => theme.yellow};
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const SupportDetails = styled.div`
  text-align: start;
  margin-bottom: 5px;
  margin: 0 5px;
`;

export const Name = styled.div`
  font-weight: bold;
`;

export const Email = styled.div`
  margin-right: 5px;
`;

export const Number = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 5vh;
  margin-right: 5px;
`;
