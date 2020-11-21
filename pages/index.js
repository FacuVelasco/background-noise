import Head from "next/head";

import { Card } from "../components/card";

import styles from "../styles/Home.module.scss";

const sounds = [
  {
    id: 0,
    name: "fire",
    src: "",
    isActive: false,
    volume: 50,
  },
  {
    id: 1,
    name: "water-flow",
    src: "",
    isActive: false,
    volume: 50,
  },
  {
    id: 2,
    name: "rain",
    src: "",
    isActive: false,
    volume: 50,
  },
  {
    id: 3,
    name: "wind",
    src: "",
    isActive: false,
    volume: 50,
  },
  {
    id: 4,
    name: "storm",
    src: "",
    isActive: false,
    volume: 50,
  },
  {
    id: 5,
    name: "drop",
    src: "",
    isActive: false,
    volume: 50,
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Background Noise</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sound for Distraction 🔊</h1>

        <p className={styles.description}>
          Pick the sounds that fills your mood
        </p>

        <div className={styles.grid}>
          {sounds.map((sound) => (
            <Card key={sound.id} {...sound} />
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.cafeparatodos}>cafeparatodos</span>
        </a>
      </footer>
    </div>
  );
}
