import Head from "next/head";
import LazyLoad from "react-lazyload";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import stock1 from "../public/gss-stock-1.jpg";
import yeti from "../public/yeti-mic.jpeg";

export default function BestStreamingSetupTwitch() {
  return (
    <div>
      <LazyLoad>
        <div className="gss-page-nav ele-3">
          <Navigation bg="primary"></Navigation>
          <div className="container gss-page-head">
            <div className="row">
              <div className="col-lg-12">
                <h1>Best Game Streaming Setup</h1>
                <p className="lead">
                  Are you ready to take your first step into video game live
                  streaming on Twitch or YouTube?
                </p>
                <p className="lead">
                  Below is a list of our recommended gear that is worth picking
                  up.
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
                strike the perfect balance between price and performance
                especially when starting off.
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
                  src={stock1}
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
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2 id="audio">Audio</h2>
              <p className="lead">
                Having great quality audio for your voice when streaming is one
                of the most important things to get right when starting off. No
                one wants to listen to low-quality audio where it sounds like
                you're in the bottom of the ocean.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <a
                href="https://www.amazon.com/Blue-Premium-Recording-Streaming-Blackout-988-000400/dp/B07QLNYBG9?dchild=1&keywords=blue+yeti+nano&qid=1631752676&sr=8-5&linkCode=li3&tag=tryorthokey06-20&linkId=0ec1981fdb4bf988eae73d7b8c7c759a&language=en_US&ref_=as_li_ss_il"
                target="_blank"
              >
                <img
                  border="0"
                  src="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QLNYBG9&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                />
              </a>
              <img
                src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li3&o=1&a=B07QLNYBG9"
                width="1"
                height="1"
                border="0"
                alt=""
              />
            </div>
            <div className="col-lg-9">
              <h3>Blue Yeti Nano USB Microphone</h3>
              <p>
                This is an exceptional USB condensor microphone that is
                virtually plug and play with both Windows and Mac. It has
                excellent audio quality featuring two sound patterns, cardioid
                and omnidirectional. The original Blue Yeti microphone featured
                two more patterns but for video game streaming, you'll probably
                always keep it in the cardioid pattern. We love the nano because
                it's virtually the same price as the original Blue Yeti but in a
                smaller, sleeker form factor. Streamers have been using Blue
                Yeti microphones for years now and for good reason.
              </p>
              <a href="https://amzn.to/3EwXQR4" className="btn btn-secondary">
                See on Amazon
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2 id="video">Video</h2>
              <p className="lead">
                Half of the fun for viewers is watching their favorite
                streamer's reactions when things get intense during a game.
                Video is an important aspect to your future stream and one that
                can help bring in more viewers!
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <a href="https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1?dchild=1&keywords=logitech+webcam&qid=1631743217&sr=8-3&linkCode=li3&tag=tryorthokey06-20&linkId=9a4f7415a6688834001f56eada38fcf7&language=en_US&ref_=as_li_ss_il">
                <img
                  border="0"
                  src="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B085TFF7M1&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                />
              </a>
              <img
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
                streaming, the Logitech c920 series cameras have been the
                quintessential webcam for Twitch streamers. The price of this
                webcam is affordable and features 1080p 30fps which is perfect
                streaming while playing games. Though there are higher quality
                webcams up to 4K resolution like the{" "}
                <a href="https://amzn.to/3lsB2Jx">Logitech Brio</a>, the c920x
                is more than enough webcam for streaming purposes.
              </p>
              <a href="https://amzn.to/3lsC87X" className="btn btn-secondary">
                See on Amazon
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2 id="video">Game Capture</h2>
              <p className="lead">
                If you're planning on streaming using a video game console like
                a PS4 or Nintendo Switch, then you're going to need a capture
                card to send the game video to your computer. Some streamers
                even use two PCs in conjunction with a capture card, one for
                streaming and one for gaming, for better performance.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              <a
                href="https://www.amazon.com/Elgato-Game-Capture-HD60-PlayStation/dp/B01DRWCOGA?dchild=1&keywords=elgato&qid=1631755649&sr=8-3&linkCode=li3&tag=tryorthokey06-20&linkId=5c33c4a8830fa3bc9e63b1751fe57f4b&language=en_US&ref_=as_li_ss_il"
                target="_blank"
              >
                <img
                  border="0"
                  src="https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01DRWCOGA&Format=_SL250_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=tryorthokey06-20&language=en_US"
                />
              </a>
              <img
                src="https://ir-na.amazon-adsystem.com/e/ir?t=tryorthokey06-20&language=en_US&l=li3&o=1&a=B01DRWCOGA"
                width="1"
                height="1"
                border="0"
                alt=""
              />
            </div>
            <div className="col-lg-9">
              <h3>Elgato HD60s Game Capture Card</h3>
              <p>
                There are a handful of capture cards around but Elgato has the
                best and most reliable cards out there. The HD60s can stream up
                to1080p 60FPS from the console to PC. It also has a lag-free
                pass-through so you can your game on a seperate tv or monitor
                like you're playing normally while you keep an eye on your
                stream and chat on your computer. Elgato's software is pretty good for what it is but it works perfectly with OBS as well.
              </p>
              <a href="https://amzn.to/39bxNAg" className="btn btn-secondary">
                See on Amazon
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
