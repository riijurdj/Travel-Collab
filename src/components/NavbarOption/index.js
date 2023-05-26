import React from "react";
import { NavOption } from "../Navbar/navbar.styles";

function index({ text, onClick }) {
  return <NavOption onClick={onClick}>{text}</NavOption>;
}

export default index;
