import React from "react";
import { Button, DescriptionC, MatchBox, ProfileIcon } from "./match.styles";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Description from "../Description" //This will give us the pop up window
function index({ info }) {
    const [clicked, setclicked] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const openModal=()=>{
        setOpen(true)
    }
    const handleRequest=()=>{
setclicked(true);
    }
    console.log("INFOOOO MATCHES ",info)
  return (
    <MatchBox>
      <div style={{ display: "flex", flexDirection: "row",justifyContent:"flex-start",alignItems:"center",marginBottom:"15px" }}>
        <ProfileIcon>{info.name[0]}</ProfileIcon>
        <div>{info.name}</div>
      </div>
      <div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"5px"}}>
          <LocationSearchingIcon style={{marginRight:"15px"}} sx={{fontSize:"20px"}} />
          {info.travelling_from}
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"5px"}}>
          <MyLocationIcon style={{marginRight:"15px"}} sx={{fontSize:"20px"}} />
          {info.destination}
        </div>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"5px"}}>
          <DateRangeIcon style={{marginRight:"15px"}} sx={{fontSize:"20px"}}/>
          {info.date}
        </div>
      </div>
      <DescriptionC onClick={openModal}>Description</DescriptionC>
      <Button clicked={clicked} onClick={handleRequest}>{clicked?"Sent!":"Send Request"}</Button>

      {/* This the pop up window opening code */}
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        
      >
          <Box><Description info={info}/></Box>
        
      </Modal>
    
      {/* <div style={{marginTop:"8px",fontSize:"15px",fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}>Description</div> */}
    </MatchBox>
  );
}

export default index;
