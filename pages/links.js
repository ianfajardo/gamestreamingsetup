import Head from "next/head";
import Footer from "../components/Footer";

export default function Links() {
  return (
    <div>
      <Head>
        <title>
          Game Streaming Setup | Twitch Streaming Setup How to Start Twitch
          streaming Video Game Streaming, Video Game Streaming Setup Twitch
          Streaming Tips
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Game Streaming Setup | Twitch Streaming Setup How to Start Twitch
          streaming Video Game Streaming, Video Game Streaming Setup Twitch
          Streaming Tips"
        />
        <meta
          name="description"
          content="The ultimate guide covering all aspects of how to start video game streaming online today! Read our tips, gear recommendations and Twitch tips."
        />
      </Head>
      <div className="gs-links">
        <div className="gss-gradient">
          <div className="container text-white">
            <div className="row">
              <div className="col-lg-12 text-center">
                <a href="/" className="link-image"></a>
                <h1 className="h4 font-weight-bolder text-white mt-3">
                  @gamestreamingsetup
                </h1>
                <p style={{ fontSize: "14px" }}>
                  Streaming guides, tips, and gear recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gs-link-container">
          <div className="container mt-3">
            <div className="row">
              <div className="col-lg-12">
                <a
                  href="/best-streaming-setup-twitch"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Best Starter Streaming Setup
                </a>

                <a
                  href="/mice"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Best Gaming Mice: The Definitive Guide
                </a>

                <a
                  href="/microphones"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Best Microphones for Streaming in 2022
                </a>

                <a
                  href="/video"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Top High-Quality Streaming Webcams
                </a>

                <a
                  href="/capture-cards"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Capture Cards for your Consoles
                </a>

                <a
                  href="/blog/top-5-video-game-hard-drives"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Best Video Game Hard Drives
                </a>

                <a
                  href="https://amzn.to/3mM1qym"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Blue Yeti Nano 20% Off Sale
                </a>
                <a
                  href="https://streamlabs.com/goprime?promo=ianfajardo-d6c6-10"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Streamlabs OBS Promo
                </a>
                <a
                  href="/blog"
                  className="btn btn-primary btn-lg btn-block mb-4"
                >
                  Blog
                </a>
              </div>
            </div>
          </div>{" "}
        </div>

        <Footer />
      </div>
    </div>
  );
}
