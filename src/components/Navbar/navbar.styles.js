import styled from "styled-components";

export const NavDiv = styled.div`
  height: 128px;
  /* background-color: lightblue; */
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-evenly; */
  padding-inline: 190px;
`;

export const NavsContainer = styled.div`
  margin-inline: 230px;
  display: flex;
  flex-direction: row;
`;
export const NavOption = styled.h3`
font-weight: 400;
font-size: medium;
  padding-inline: 8px;
  :hover {
    cursor: pointer;
  }
`;

export const IconsContainer=styled.div`
    display: flex;
    flex-direction: row;
`
