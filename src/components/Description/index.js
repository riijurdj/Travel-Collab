import React from "react";
import { Button, ProfileIcon } from "../Match/match.styles";
import { Container } from "./des.styles";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
function index({ info }) {
  const handleRequest = () => {
    setclicked(true);
  };
  const [clicked, setclicked] = React.useState(false);
  return (
    <Container>
      <ProfileIcon large>{info.name[0]}</ProfileIcon>
      <h2 style={{margin:"10px 0px"}}>{info.name}</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
          
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <LocationSearchingIcon
            style={{ marginRight: "15px" }}
            sx={{ fontSize: "20px" }}
          />
          {info.travelling_from}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <MyLocationIcon
            style={{ marginRight: "15px" }}
            sx={{ fontSize: "20px" }}
          />
          {info.destination}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <DateRangeIcon
            style={{ marginRight: "15px" }}
            sx={{ fontSize: "20px" }}
          />
          {info.date}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          Time:{info.time}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "5px",
          }}
        >
          Mode: {info.mode}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {/* <DateRangeIcon style={{marginRight:"15px"}} sx={{fontSize:"20px"}}/> */}
          No. of Passengers: {info.number_of_members}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          {info.description?info.description:"No Current Description"}
        </div>
        <div style={{marginLeft:"10px"}}>
        <Button clicked={clicked} onClick={handleRequest}>
          {clicked ? "Sent!" : "Send Request"}
        </Button>
        </div>
      </div>
    </Container>
  );
}

export default index;
