import Layout from "../../components/layout";
import Link from "next/link";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../lib/blogposts";
import Date from "../../components/date";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  const allPostsData = getSortedPostsData();
  return {
    props: {
      postData,
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, allPostsData }) {
  return (
    <div className="blog-layout">
      <Head>
        <title>
          {"Game Streaming Setup - " + postData.metatitle
            ? postData.metatitle
            : postData.title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content={"Game Streaming Setup - " + postData.title}
        />
        <meta
          name="description"
          content={
            postData.description
              ? postData.description
              : "The ultimate guide covering all aspects of how to start video game streaming online today! Read our tips, gear recommendations and Twitch tips."
          }
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://www.gamestreamingsetup.com/blog/" + postData.slug}
        />
        <meta
          property="og:title"
          content={
            "Game Streaming Setup - " + postData.metatitle
              ? postData.metatitle
              : postData.title
          }
        />
        <meta
          property="og:description"
          content={
            postData.description
              ? postData.description
              : "The ultimate guide covering all aspects of how to start video game streaming online today! Read our tips, gear recommendations and Twitch tips."
          }
        />
        <meta
          property="og:image"
          content={
            postData.image
              ? "https://www.gamestreamingsetup.com" + postData.image
              : "https://www.gamestreamingsetup.com/gss-logo-long.png"
          }
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://www.gamestreamingsetup.com/blog/" + postData.slug}
        />
        <meta
          property="twitter:title"
          content={
            "Game Streaming Setup - " + postData.metatitle
              ? postData.metatitle
              : postData.title
          }
        />
        <meta
          property="twitter:description"
          content={
            postData.description
              ? postData.description
              : "Ortholinear keyboards are computer keyboards with a grid layout. Most orthlinear keyboards have mechanical key switches and programmable keymappings."
          }
        />
        <meta
          property="twitter:image"
          content={
            postData.image
              ? "https://www.gamestreamingsetup.com" + postData.image
              : "https://www.gamestreamingsetup.com/gss-logo-long.png"
          }
        />
      </Head>
      <Layout>
        <article>
          <div className="section-container bg-primary text-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <Link href="/blog">
                    <a className="text-white">Blog</a>
                  </Link>
                  <h1 className="font-weight-bolder py-3">{postData.title}</h1>
                  <Date dateString={postData.date} />
                </div>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                  />
                </div>
                <div className="col-lg-3">
                  <div className="px-2">
                    <h4 className="mb-3">Guides</h4>
                    {allPostsData
                      .filter(function (el) {
                        return "Guides" === el.type;
                      })
                      .map(({ slug, date, title, description, image }) => (
                        <div>
                          <div key={slug} className="mt-2 mb-3">
                            <div
                              className="gss-link-img"
                              style={{
                                background:
                                  "url('" +
                                  image +
                                  "') center center no-repeat",
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div>
                              <div className="text-muted ">
                                <small>
                                  <Date dateString={date} />
                                </small>
                              </div>
                              <Link href={`/blog/${slug}`}>
                                <a className="blog-title">{title}</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                      .slice(0, 2)}

                    <h4 className="mb-3">Gear Reviews</h4>
                    {allPostsData
                      .filter(function (el) {
                        return "Reviews" === el.type;
                      })
                      .map(({ slug, date, title, description, image }) => (
                        <div>
                          <div key={slug} className="mt-2 mb-3">
                            <div
                              className="gss-link-img"
                              style={{
                                background:
                                  "url('" +
                                  image +
                                  "') center center no-repeat",
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div>
                              <div className="text-muted ">
                                <small>
                                  <Date dateString={date} />
                                </small>
                              </div>
                              <Link href={`/blog/${slug}`}>
                                <a className="blog-title">{title}</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                      .slice(0, 2)}

                    <h4 className="mb-3">News</h4>
                    {allPostsData
                      .filter(function (el) {
                        return "News" === el.type;
                      })
                      .map(({ slug, date, title, description, image }) => (
                        <div>
                          <div key={slug} className="mt-2 mb-3">
                            <div
                              className="gss-link-img"
                              style={{
                                background:
                                  "url('" +
                                  image +
                                  "') center center no-repeat",
                                backgroundSize: "cover",
                              }}
                            ></div>
                            <div>
                              <div className="text-muted ">
                                <small>
                                  <Date dateString={date} />
                                </small>
                              </div>
                              <Link href={`/blog/${slug}`}>
                                <a className="blog-title">{title}</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))
                      .slice(0, 2)}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <hr />
              <h3 className="py-5">Recent Posts</h3>
            </div>
          </div>
          <div className="row">
            {allPostsData
              .map(({ slug, date, title, description, image }) => (
                <div className="col-lg-3" key={slug}>
                  <div className="mb-5">
                    <div className="row">
                      <div className="col-lg-12">
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
                      <div className="col-lg-12">
                        <div className="text-muted ">
                          <small>
                            <Date dateString={date} />
                          </small>
                        </div>
                        <Link href={`/blog/${slug}`}>
                          <a className="blog-title">{title}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
              .slice(0, 4)}
          </div>
        </div>
      </Layout>
    </div>
  );
}
