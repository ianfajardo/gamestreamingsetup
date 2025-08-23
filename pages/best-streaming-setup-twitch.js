import Head from "next/head";
import LazyLoad from "react-lazyload";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import stock1 from "../public/gss-stock-1.jpg";
import yeti from "../public/yeti-mic.jpeg";

import stock3 from "../public/gss-stock-3.jpg";
import SEOhead from "../components/SEOhead";

const meta = {
  title: "Best Streaming Setup Twitch",
  description:
    "Are you ready to take your first step into video game live streaming on Twitch or YouTube? Here is the best beginner streaming setup for Twitch or YouTube.",
  url: "https://gamestreamingsetup.com/best-streaming-setup-twitch",
  image: "https://gamestreamingsetup.com/gss-stock-3.jpg",
};

export default function BestStreamingSetupTwitch() {
  return (
    <div>
      <SEOhead meta={meta} />
      <Head>
        <title>Best Streaming Setup Twitch</title>
        <meta
          name="description"
          content="Are you ready to take your first step into video game live
          streaming on Twitch or YouTube? Here is the best beginner streaming setup for Twitch or YouTube."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LazyLoad>
        <div
          className="gss-page-nav ele-3"
          style={{
            background: "url('/gss-stock-3.jpg') center center no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Navigation bg="transparent"></Navigation>
          <div className="container gss-page-head">
            <div className="row">
              <div className="col-lg-12">
                <h1>The Best Starter Streaming Setup</h1>
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
          <div className="row align-items-center gss-section">
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
                In this article, we'll go over the must-have gear you'll need to
                stream with your current gaming setup!
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
              <a href="https://amzn.to/3Ah4Te4" className="btn btn-secondary">
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
                <a href="https://amzn.to/2Xp7O6m">Logitech Brio</a>, the c920x
                is more than enough webcam for streaming purposes.
              </p>
              <a href="https://amzn.to/3EmYUXz" className="btn btn-secondary">
                See on Amazon
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2 id="gamecapture">Game Capture</h2>
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
              
            </div>
            <div className="col-lg-9">
              <h3>Elgato HD60s Game Capture Card</h3>
              <p>
                There are a handful of capture cards around but Elgato has the
                best and most reliable cards out there. The HD60s can stream up
                to1080p 60FPS from the console to PC. It also has a lag-free
                pass-through so you can your game on a seperate tv or monitor
                like you're playing normally while you keep an eye on your
                stream and chat on your computer. Elgato's software is pretty
                good for what it is but it works perfectly with OBS as well.
              </p>
              <a href="https://amzn.to/3CiINs4" className="btn btn-secondary">
                See on Amazon
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2 id="lighting">Lighting</h2>
              <p className="lead">
                Lighting is something that often gets glossed over when starting
                to stream video games but is something that is worth investing
                on the get go. You could have the best webcam in the world but
                if you're sitting in the dark or your light source is behind
                you, then you can be barely seen in your feed. Even cheap
                webcams with great lighting can be more workable than bad
                lighting with an awesome webcam.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-3">
              
            </div>
            <div className="col-lg-9">
              <h3>Elgato Key Light Air</h3>
              <p>
                Elgato is on the list here again with their Key Light Air. This
                is a great customizable light is can be controlled via their app
                on PC, Mac, iPhone and Android. The brightness and color
                temperature can be changed to suit your needs and is fully
                adjustable. When not in use, it can also be used as a regular
                desk lamp!
              </p>
              <a href="https://amzn.to/3hBLkWD" className="btn btn-secondary">
                See on Amazon
              </a>
            </div>
          </div>

          <div className="row mt-5 align-items-center gss-section">
            <div className="col-lg-8">
              <h2>Just Start Creating!</h2>
              <p>
                The best advice we can give you when starting off streaming is
                to just dive right in, start playing, and
                BestStreamingSetupTwitch! Our list above will have you covered
                for a majority of your streaming (at least until you make it
                big, but by then you can get all the top of the line gear). You
                can easily buy cheap knockoffs online but these products have
                been battle-tested with thousands of reviews and plenty of
                streamers still using these products even today.
              </p>
            </div>
            <div className="col-lg-4">
              <LazyLoad>
                <Image
                  className="img-fluid img-radius"
                  src={stock3}
                  alt="Streaming Twitch Online Gear Equipment"
                />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
