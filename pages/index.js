import Head from "next/head";

const Homepage = () => (
  <main>
    <Head>
      <title>The Grateful Undead</title>
      <meta property="og:title" content="The Grateful Undead"></meta>
      <meta
        property="og:description"
        content="The Grateful Undead - rulers of Tichondrius"
      ></meta>
      <meta property="og:image" content="/og.png"></meta>
    </Head>
    <h1>The Grateful Undead</h1>
  </main>
);

export default Homepage;
