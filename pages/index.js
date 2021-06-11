import React, {useEffect} from "react"
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import PostsList from "../components/PostsList/PostsList";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Noon IG Clone | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>
      <PostsList isFavorites={false} />
    </div>
  );
}


export default Home;