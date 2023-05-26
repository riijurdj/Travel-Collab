import React from "react";
import { Box, Button, Input, Inputs } from "./sb.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { APIS } from "../../api/API";
import { results } from "../../api/Results";
import moment from 'moment';

// API calling to the /search_travel_group endpoint
function index() {
  const axios = require("axios");
  const router = useRouter();
  const handleAPI = () => {
    // const article = { title: "Axios POST Request Example" };
    const params = new URLSearchParams();

    params.append("travelling_from", source);
    params.append("destination",destination);
    params.append("date", moment(date).format('L') );
console.log(params);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios.post(APIS.searchMatches, params, config).then((response) => {
      console.log("API CALLING");
      results.searchMatches = response;
      console.log("API RESPONSE->", response);
      router.push("/search");
    });
  };
  const [source, setsource] = React.useState();
  const [destination, setdestination] = React.useState();
  const [date, setdetination] = React.useState();
  // console.log(source, destination, date);

  //frontend
  return (
    <Box>
      <Inputs>
        <div style={{ display: "flex", flexDirection: "column" }}>
          Travelling from
          <Input onChange={(v) => setsource(v.target.value)} type={"text"}></Input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          Destination
          <Input onChange={(v) => setdestination(v.target.value)} type={"text"}></Input>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          Date of Travel
          <Input onChange={(v) => setdetination(v.target.value)} type={"date"}></Input>
        </div>
        <Button onClick={handleAPI}>
          <SearchIcon style={{ marginRight: "18px" }}></SearchIcon>Search
        </Button>
      </Inputs>
      <div style={{ marginTop: "20px" }}>
        <a style={{ color: "red" }}> Add Request</a>

        <a
          style={{
            color: "red",
            textDecoration: "underline",
            marginLeft: "550px",
          }}
        >
          {" "}
          Help
        </a>
      </div>
    </Box>
  );
}

export default index;
