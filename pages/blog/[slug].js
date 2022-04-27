import Layout from "../../components/layout";
import Link from "next/link";
import { getAllPostIds, getPostData } from "../../lib/blogposts";
import Date from "../../components/date";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
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

export default function Post({ postData }) {
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
                <div className="col-lg-12">
                  <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </div>
  );
}
