import Head from "next/head";
import Image from "next/image";
import LazyLoad from "react-lazyload";

import Navigation from "./components/navigation";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Game Streaming Setup</title>
        <meta name="description" content="Game Streaming Setup" />
        <link rel="icon" href="/favicon.ico" />

        <title>
          Game Streaming Setup | Twitch Streaming Setup How to Start Twitch
          streaming Video Game Streaming, Video Game Streaming Setup Twitch
          Streaming Tips
        </title>
        <meta
          name="title"
          content="Game Streaming Setup | Twitch Streaming Setup How to Start Twitch streaming Video Game Streaming, Video Game Streaming Setup Twitch Streaming Tips"
        />
        <meta
          name="description"
          content="The ultimate guide covering all aspects of how to start video game streaming online today! Read our tips, gear recommendations and Twitch tips."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamestreamingsetup.com" />
        <meta
          property="og:title"
          content="Game Streaming Setup | Twitch Streaming Setup How to Start Twitch streaming Video Game Streaming, Video Game Streaming Setup Twitch Streaming Tips"
        />
        <meta
          property="og:description"
          content="The ultimate guide covering all aspects of how to start video game streaming online today! Read our tips, gear recommendations and Twitch tips."
        />
        <meta
          property="og:image"
          content="https://gamestreamingsetup.com/gss-logo-long.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gamestreamingsetup.com" />
        <meta
          property="twitter:title"
          content="Game Streaming Setup | Twitch Streaming Setup How to Start Twitch streaming Video Game Streaming, Video Game Streaming Setup Twitch Streaming Tips"
        />
        <meta
          property="twitter:description"
          content="The ultimate guide covering all aspects of how to start video game streaming online today! Read our tips, gear recommendations and Twitch tips."
        >
          <meta
            property="twitter:image"
            content="https://gamestreamingsetup.com/gss-logo-long.png"
          />
        </meta>
      </Head>

      <div className="gss-homepage-bg">
        <LazyLoad>
          <Navigation></Navigation>
        </LazyLoad>

        <div className="gss-jumbo">
          <div className="container-fluid">
            <div className="row align-items-center" style={{ height: "100%" }}>
              <div className="col-lg-12 text-white text-center">
                <h1>Get the Ultimate Streaming Setup.</h1>
                <p className="lead">
                  See our recommendations and tips on video game streaming on
                  Twitch and more!
                </p>
                <a className="btn btn-lg btn-secondary text-white mr-3">
                  Streaming Gear
                </a>{" "}
                <a className="btn btn-lg btn-primary text-white mr-3">
                  Read Our Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">asdf</div>
        </div>
      </div>
    </div>
  );
}
