import React from "react";
import Grid from "@mui/material/Grid";
import Match from "../../components/Match";
function MatchesContainer({ data }) {
  console.log(data);
  const info = data.data.output;
 
  return (
    <div
      style={{
        width: "70%",
        backgroundColor: "lightBlue",
        height: "100%",
        paddingLeft: "35px",
        borderRadius: "20px"
      }}
    >
      <Grid container spacing={2}>
        {info.map((obj, id) => {
          return (
            <Grid key={id} item xs={4}>
              <Match info={obj} />
            </Grid>
          );
        })}
        {/* <Grid item xs={4}>
          <Match info={info} />
        </Grid>
        <Grid item xs={4}>
          <Match info={info} />
        </Grid>
        <Grid item xs={4}>
          <Match info={info} />
        </Grid>
        <Grid item xs={4}>
          <Match info={info} />
        </Grid> */}
      </Grid>
    </div>
  );
}

export default MatchesContainer;
