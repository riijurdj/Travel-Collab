import React from "react";
import { NavDiv, NavsContainer, IconsContainer } from "./navbar.styles";
import Image from "next/image";
import NavOption from "../NavbarOption";
import img from "../../../public/images/logo.svg";
import Icons from "../Icons";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextsmsIcon from "@mui/icons-material/Textsms";

function Navbar() {
  return (
    <NavDiv>
      {/* <Image src={img} height={"54px"} width={"160px"} /> */}
      <h3>Travel-Colab</h3>
      <NavsContainer>
        <NavOption
          text={"Home"}
          onClick={() => console.log("working")}
        ></NavOption>
        <NavOption
          text={"Dashboard"}
          onClick={() => console.log("working")}
        ></NavOption>
        <NavOption
          text={"Add Request"}
          onClick={() => console.log("working")}
        ></NavOption>
      </NavsContainer>
      <IconsContainer>
        <Icons icon={<NotificationsIcon />} />
        <Icons icon={<TextsmsIcon />} />
      </IconsContainer>
    </NavDiv>
  );
}

export default Navbar;
