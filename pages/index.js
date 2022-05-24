import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Amazskupage from "./amazskupage";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon SKuPage</title>
        <Amazskupage/>
      </Head>
    </div>
  );
}

