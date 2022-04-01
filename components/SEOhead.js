import Head from "next/head";

export default function SEOhead({ meta }) {
  return (
    <Head>
      <title>
        Video Game Capture Cards for Live Streaming | Elgato HD60 Mirabox
        avermedia
      </title>
      <meta name="title" content={meta.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <meta name="description" content={meta.description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image} />
    </Head>
  );
}
