import styled from '@emotion/styled';

export const ListOfContact = styled.ul`
  list-style-type: circle;
  padding: 0;
  margin: 0;
`;

export const Container = styled.div`
  width: 300px;
  margin: 0;
  border: 1px solid gray;
  padding: 20px;
`;

export const ContactItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
`;
