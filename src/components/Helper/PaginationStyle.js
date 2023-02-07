import styled from "styled-components";

export const PaginationContainer = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const PageButtonContainer = styled.li`
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: auto;
  height: auto;
  padding: 15px;
  border: 1px solid #ebebf0;
  box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  background-color: ${(props) => (props.current ? "#1510ff" : "white")};
  color: ${(props) => (props.current ? "white" : "#212126")};
  &:hover {
    background-color: #acacf0;
  }
`;
