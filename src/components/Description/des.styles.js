import styled from "styled-components";
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  border: 2px solid #000;
  box-shadow: 24;
    p:4;
    background-color: white;
  width: 300px;
  height:${p=>p.auth?"100px":"500px"};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-inline: 15px;
  padding:30px;
`;
