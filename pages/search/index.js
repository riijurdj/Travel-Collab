// import Head from 'next/head'
// import Image from 'next/image'
// import styles from "../styles/Home.module.css";
import { APIS } from "../../src/api/API";
import { results } from "../../src/api/Results";
import MatchesContainer from "../../src/container/Matches/MatchesContainer";
import NavContianer from "../../src/container/NavContainer"
// import SearchContainer from "../src/container/SearchContainer"
export default function Home() {
  console.log("LOGS FROM SEARCH RESULTS",results.searchMatches)
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"}}>
      <NavContianer />
      <MatchesContainer data={results.searchMatches}/>
    </div>
  );
}
