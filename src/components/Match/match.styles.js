import styled from 'styled-components'
export const MatchBox = styled.div`
    width: 250px;
    height: 260px;
    border-radius: 15px;
    background-color: #e5e5f3;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    padding:20px;
    /* justify-content: center; */
    margin: 15px;  

`
export const ProfileIcon=styled.div`
    display: flex;
    flex-direction:column;
    color:white;
    font-size: xx-large;
    align-items: center;
    height: ${p=>p.large?'100px':'40px'};
    width: ${p=>p.large?'100px':'40px'};;
    justify-content: center;
    background-color:#455a64 ;
    border-radius: ${p=>p.large?'50px':'20px'};
    margin-right: 15px ;
    
`
export const DescriptionC=styled.div`
    margin-top:8px;
    font-size:15px;
    font-weight:bold;
    display:flex;
    flex-direction:column;
    align-items:center;
    :hover{
        cursor: pointer;
    }
`
export const Button=styled.button`
    height: 35px;
    width: 150px;
    background-color: ${p=>p.clicked?"#51cea2":"rgb(0, 25, 99)"};
    color: white;
    border-radius: 4px;
    padding: 10px;
    margin-left: 30px;
    margin-top: 15px;
    border-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: larger;
    justify-content: center;
    :hover{
        cursor: pointer;
    }

`