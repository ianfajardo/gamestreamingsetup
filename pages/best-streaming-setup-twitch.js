import Head from "next/head";
import LazyLoad from "react-lazyload";
import Image from 'next/image'

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function BestStreamingSetupTwitch() {
  return (
    <div>
      <LazyLoad>
        <div className="gss-page-nav ele-3">
          <Navigation bg="primary"></Navigation>
          <div className="container gss-page-head">
            <div className="row-">
              <div className="col-lg-12">
                <h1>Best Streaming Setup</h1>
                <p className="lead">
                  Are you ready to take your first step into video game live
                  streaming on Twitch or Youtube? Below is a list of our
                  recommended gear that worth picking up that strikes a balance
                  between price and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <div className="gss-page-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Getting Started</h2>
              <p className="lead">
                So, your best friend has finally convinced you to start
                streaming yourself playing Warzone on Twitch.
              </p>
              <p>
                Or maybe you've been inspired by your favorite streamers or your
                friends want to watch you play that old retro game you love.
                Whatever the reason, you'll probably need to buy some gear to
                start streaming. If you've done any kind of google or amazon
                search online, you'll find a bunch of different options out
                there for you. If you're anything like us, you probably want to
                strike the perfect balance between price and performance when
                starting off.
              </p>
              <p>
                In this article, we'll go over the gear you must-have gear
                you'll need to stream with your current gaming setup and a
                couple optional things that you might want to buy down the road.
              </p>
            </div>
            <div className="col-lg-4">
              <LazyLoad>
                <Image
                  className="img-fluid img-radius"
                  src="/gss-stock-1.jpg"
                  alt="Streaming Twitch Call of Duty Gear"
                />
              </LazyLoad>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2>Essentials for Video Game Streaming</h2>
              <p className="lead">
                When it comes to online video game streaming, there are four
                essentials that you need to account for:{" "}
                <a href="#audio" className="article-link">
                  audio
                </a>
                ,{" "}
                <a href="#video" className="article-link">
                  video
                </a>
                ,{" "}
                <a href="#gamecapture" className="article-link">
                  game capture
                </a>
                , and{" "}
                <a href="#lighting" className="article-link">
                  lighting
                </a>
                .{" "}
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12">
              <h2 id="audio">Video</h2>
              <p className="lead">
                Half of the fun for viewers is watching their favorite
                streamer's reactions when things get intense during a game.
                Video is an important aspect to your future stream and something
              </p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3">
              <a
                href="https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1?dchild=1&keywords=logitech+webcam&qid=1631743217&sr=8-3&linkCode=li3&tag=tryorthokey06-20&linkId=9a4f7415a6688834001f56eada38fcf7&language=en_US&ref_=as_li_ss_il"
                target="_blank"
              >
                <Image
                  border="0"
                  src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B085TFF7M1&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                />
              </a>
              <Image
                src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li3&o=1&a=B085TFF7M1"
                width="1"
                height="1"
                border="0"
                alt=""
              />
            </div>
            <div className="col-lg-9">
              <h3>Logitech C920x Pro Stream Webcam</h3>
              <p>
                Even before companies started creating webcams specifically for
                streaming, the Logitech c922x pro has been the quintessential
                webcam for Twitch streamers. The price of this webcam is
                affordable and features mos
              </p>
              <a href="https://amzn.to/3lsC87X" className="btn btn-secondary">See on Amazon</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
