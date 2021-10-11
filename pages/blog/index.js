import Head from "next/head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { getSortedPostsData } from "../../lib/blogposts";

import Link from "next/link";
import Date from "../../components/date";

import squareImage from "../../public/gss-logo-square.png";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>
          Game Streaming Setup - Blog | Streaming Tips Video Game Streaming
          Twitch video game streaming YouTube Streaming
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Easily Get Started Streaming Today. Read out blog page for articles on tips, tricks gear recommendations and more for streaming for Twitch."
        />
      </Head>

      <Navigation bg="primary" />

      <div className="gss-page-container">
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
        </div>

        <div id="blog" className="section-container ">
          <div className="container">
            <div className="row">
              {allPostsData.map(({ slug, date, title, description, image }) => (
                <div className="col-lg-6" key={slug}>
                  <div className="mb-5">
                    <div className="row">
                      <div className="col-lg-5">
                        <Link href={`/posts/${slug}`}>
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
      </div>
      <Footer />
    </div>
  );
}
