import React from "react";
import { useRouter } from "next/router";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { APIS } from "../../api/API";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "../Description/des.styles";



//This is the API call for Signing UP!
export default function SignUp({ setState }) {
  const [open, setOpen] = React.useState(false);
  const [modalDisplay, setmodalDisplay] = React.useState("")
  const axios = require("axios");
  const route = () => {
    setState("login");
  };
  const params = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };
  const add = () => {
    console.log(params);

    const reqBody = new URLSearchParams();

    reqBody.append("first_name", params.first_name);
    reqBody.append("last_name", params.last_name);
    reqBody.append("email", params.email);
    reqBody.append("password", params.password);
    console.log(reqBody);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios.post(APIS.signup, reqBody, config).then((response) => {
      console.log("API CALLING",response);
      setOpen(true);
      setmodalDisplay(response.data.output);
    //   modalDisplay = response.data.output;
      //   results.signupToken = response;
      console.log("API RESPONSE->", response);
      // router.push("/search");
      //   setState("login");
    });
  };

  return (
    <>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>First name</label>
        <input
          style={{ marginTop: "10px", marginBottom: "15px" }}
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => (params.first_name = e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Last name</label>
        <input
          style={{ marginTop: "10px", marginBottom: "15px" }}
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={(e) => (params.last_name = e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          style={{ marginTop: "10px", marginBottom: "15px" }}
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={(e) => (params.email = e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          style={{ marginTop: "10px", marginBottom: "15px" }}
          type="password"
          className="form-control"
          onChange={(e) => (params.password = e.target.value)}
          placeholder="Enter password"
        />
      </div>
      <button className="btn btn-primary btn-block" onClick={add}>
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a onClick={route}>Log in?</a>
      </p>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box><Container auth >{modalDisplay} </Container></Box>
      </Modal>
    </>
  );
}
