// import Head from 'next/head'
// import Image from 'next/image'
import styles from "../../styles/Home.module.css";
import NavContianer from "../../src/container/NavContainer";
import SearchContainer from "../../src/container/SearchContainer";
export default function Home() {
  return (
    <div
      
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <NavContianer />
      <SearchContainer />
    </div>
  );
}
