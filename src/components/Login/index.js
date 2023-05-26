import React from "react";
import { useRouter } from "next/router";
import { APIS } from "../../api/API";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Container } from "../Description/des.styles";
// import ' ../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"


//This is the API call for the /Login Functionality
export default function Login({ setState }) {
  const [open, setOpen] = React.useState(false);
  const [modalDisplay, setmodalDisplay] = React.useState("");
  const router = useRouter();
  const axios = require("axios");
  const routeToSignup = () => {
    router.push("/signUp");
  };
  const params = {
    email: "",
    password: "",
  };
  const auth = () => {
    const reqBody = new URLSearchParams();
    reqBody.append("email", params.email);
    reqBody.append("password", params.password);
    console.log(reqBody);
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
    axios.post(APIS.login, reqBody, config).then((response) => {
      console.log("API CALLING", response);

      let res = response.data.output;
      if (res == "matched") {
        router.push("/home");
      } else if (res == "unmatched") {
        setmodalDisplay("Email OR Password Incorrect!");
        setOpen(true);
      }else if(res=="User doesnt exist"){
        setmodalDisplay(res);
        setOpen(true);
      }

      //   modalDisplay = response.data.output;
      //   results.signupToken = response;
      console.log("API RESPONSE->", response);
      // router.push("/search");
      //   setState("login");
    });
  };

  return (
    <>
      <h3>Login</h3>
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
          placeholder="Enter password"
          onChange={(e) => (params.password = e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            style={{ marginTop: "10px", marginBottom: "15px" }}
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label
            style={{ marginLeft: "20px" }}
            className="custom-control-label"
            htmlFor="customCheck1"
          >
            Remember me
          </label>
        </div>
      </div>
      <button
        style={{ marginTop: "20px" }}
        type="submit"
        className="btn btn-primary btn-block"
        onClick={auth}
      >
        Submit
      </button>
      <p className="forgot-password text-right">
        <a onClick={routeToSignup}> User Deosn't Exist?</a>
      </p>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box>
          <Container auth>{modalDisplay} </Container>
        </Box>
      </Modal>
    </>
  );
}
