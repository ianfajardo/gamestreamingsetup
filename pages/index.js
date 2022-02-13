import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import { getSortedPostsData } from "../lib/blogposts";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Date from "../components/date";

import streamlabs from "../public/streamlabs.png";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Game Streaming Setup</title>
        <meta name="description" content="Game Streaming Setup" />
        <link rel="icon" href="/favicon.ico" />

        <title>
          Game Streaming Setup | twitch streaming gear HD Game capture Twitch
          Streaming Setup How to Start Twitch streaming Video Game Streaming,
          Video Game Streaming Setup Twitch Streaming Tips
        </title>
        <meta
          name="title"
          content="Game Streaming Setup | twitch streaming gear HD Game capture Twitch Streaming Setup How to Start Twitch streaming Video Game Streaming, Video Game Streaming Setup Twitch
          Streaming Tips"
        />
        <meta
          name="description"
          content="We're all about the future of gaming. Video game streaming has taken off in recent years and we want to show you how you can get involved and make a living from your passion."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamestreamingsetup.com" />
        <meta
          property="og:title"
          content="Game Streaming Setup | twitch streaming gear HD Game capture Twitch Streaming Setup How to Start Twitch streaming Video Game Streaming, Video Game Streaming Setup Twitch
          Streaming Tips"
        />
        <meta
          property="og:description"
          content="We're all about the future of gaming. Video game streaming has taken off in recent years and we want to show you how you can get involved and make a living from your passion."
        />
        <meta
          property="og:image"
          content="https://gamestreamingsetup.com/gss-logo-long.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gamestreamingsetup.com" />
        <meta
          property="twitter:title"
          content="Game Streaming Setup | twitch streaming gear HD Game capture Twitch Streaming Setup How to Start Twitch streaming Video Game Streaming, Video Game Streaming Setup Twitch
          Streaming Tips"
        />
        <meta
          property="twitter:description"
          content="We're all about the future of gaming. Video game streaming has taken off in recent years and we want to show you how you can get involved and make a living from your passion."
        />
        <meta
          property="twitter:image"
          content="https://gamestreamingsetup.com/gss-logo-long.png"
        />
      </Head>

      <div className="gss-homepage-bg ele-5">
        <LazyLoad>
          <Navigation bg="transparent"></Navigation>
        </LazyLoad>

        <div className="gss-jumbo">
          <div className="container-fluid">
            <div className="row align-items-center" style={{ height: "100%" }}>
              <div className="offset-lg-3 col-lg-6 text-white text-center">
                <h1>Start streaming now</h1>
                <p className="lead py-3">
                  We're all about the future of gaming. Video game streaming has
                  taken off in recent years and we want to show you how you can
                  get involved and make a living from your passion.
                </p>
                <Link href="/best-streaming-setup-twitch">
                  <a className="btn btn-lg btn-secondary text-white me-3">
                    View our Streaming Setup
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="getstarted">
        <div className="container mt-5">
          <div className="row mb-5">
            <div className="col-lg-3">
              <div className="card card-bg ele-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <h3 className="mb-0 text-white">
                        How to Stream from the Ground Up
                      </h3>
                      <p className="text-white mt-2">
                        We've got all your needs covered from picking the right
                        streaming equipment and software to setting up your
                        stream so it's perfect for watching.
                      </p>
                      <Link href="/best-streaming-setup-twitch">
                        <a className="btn btn-primary">Learn More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="gss-section ele-3">
                <div className="streamlabs-logo">
                  <Image
                    src={streamlabs}
                    alt="Streamlabs Prime Premium tookit for professional content creators"
                    className="streamlabs-logo"
                  />
                </div>
                <h2 className="mb-4">
                  The Best All-in-one live streaming software
                </h2>
                <h3>Streamlabs OBS</h3>
                <p>
                  For most users, Streamlabs OBS is the ideal streaming software
                  to use for streaming on Twitch, YouTube and more. It provides
                  a streamlined user experience geared to live-streaming video
                  games with the famliarity of OBS (Open Broadcaster Software)
                  and building on it with widgets, themes, and much more. If
                  you're a beginner streamer trying to get setup right away or a
                  veteran trying to add all the widgets to engage with your
                  viewers, then this is for you.
                </p>
                <a
                  className="btn btn-secondary"
                  href="https://streamlabs.com/goprime?promo=ianfajardo-d6c6-10"
                >
                  Sign Up Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="blog" className="section-container ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="py-3">
                <h1>Blog</h1>
                <p className="lead">
                  Streaming guides, tips, and gear recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {allPostsData.map(({ slug, date, title, description, image }) => (
              <div className="col-lg-6" key={slug}>
                <div className="mb-5">
                  <div className="row">
                    <div className="col-lg-5">
                      <Link href={`/blog/${slug}`}>
                        <a className="d-block">
                          <img
                            className="img-fluid mb-3"
                            src={image}
                            alt="title"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="col-lg-7">
                      <div className="text-muted ">
                        <small>
                          <Date dateString={date} />
                        </small>
                      </div>
                      <Link href={`/blog/${slug}`}>
                        <a className="blog-title">{title}</a>
                      </Link>
                      <div className="lead">{description}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
