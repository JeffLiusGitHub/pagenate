import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;

  justify-content: space-between;
`;

export const InputContainer = styled.input`
  font-size: 1rem;
  display: inline-block;
  border: 1px solid #ebebf0;
  background-color: #ebebf0;
  width: 80%;
  height: 100%;
  padding: 0.7rem;
  color: #7f808c;
`;

export const ButtonContainer = styled.button`
  color: white;
  background-color: #1510ff;
  width: 15%;
  max-width: 100px;
  display: inline-block;
  border: 1px solid #1510ff;
  margin-left: 1rem;
  height: 100%;
  border-radius: 0.15rem;
`;

export const ResultList = styled.ul`
  margin-top: 20px;
  padding: 0;
`;

export const ResultItem = styled.li`
  list-style: none;
  color: #212126;
  border: 1px solid #ebebf0;
  height: 2rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  text-align: center;
  align-items: center;
  padding: 10px 0px 10px 15px;
  margin: 15px 0;
  box-shadow: -2px 4px 10px 0px rgba(0, 0, 0, 0.125);
  &:hover {
    background-color: #1510ff;
    color: white;
  }
`;
