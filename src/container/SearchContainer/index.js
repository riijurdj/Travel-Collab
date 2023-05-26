import Image from "next/image";
import React from "react";
import SearchBox from "../../components/SearchBox";
import { Text } from "../../components/Text/text.styles";
import img from "../../../public/images/homeILL.png";
import zIndex from "@mui/material/styles/zIndex";
function index() {
  return (
    <>
      <div style={{  marginLeft: "300px" }}>
        <Text size={"xx-large"}>Looking for someone to travel with?</Text>
        <SearchBox></SearchBox>
      </div>
      <div style={{ position: "absolute",marginTop:"200px",left:"30px",zIndex: -1 }}>
        <Image
          src={img}
          
          height={"550px"}
          width={"550px"}
        ></Image>
      </div>
    </>
  );
}

export default index;
