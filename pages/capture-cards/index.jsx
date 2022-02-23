import Head from "next/head";
import LazyLoad from "react-lazyload";
import Image from "next/image";

import Table from "react-bootstrap/Table";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import stock1 from "../../public/video-game-capture-card.jpg";
import yeti from "../../public/yeti-mic.jpeg";

import stock3 from "../../public/gss-stock-3.jpg";

var products = [
  {
    name: "Elgato HD60 S+ ",
    price: "$160",
    rating: "4.8",
    date: "April 16, 2020",
    details: "1080p60 HDR10, 4k6 HDR10, Pass-through, PC & Mac",
    brand: "Elgato",
    buyLink: "",
    link: "",
    amazon1:
      "https://www.amazon.com/Elgato-External-Capture-1080p60-ultra-low/dp/B07XB6VNLJ?keywords=elgato+hd60&qid=1645648838&sr=8-2&linkCode=li2&tag=gamestreamingsetup-20&linkId=fbee3f3275521b91968715dbc6cd54d7&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07XB6VNLJ&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07XB6VNLJ",
  },
  {
    name: "Elgato HD60 Pro",
    price: "$195",
    brand: "Elgato",
    rating: "4.6",
    date: "September 14, 2015",
    details: "1080p60, PCIe Capture Card, Pass-through",
    buyLink: "https://amzn.to/3t0Qe4c",
    link: "",
    amazon1:
      "https://www.amazon.com/Elgato-Pro1080p60-Passthrough-Low-Latency-Technology/dp/B014MQIVPS?crid=2MQGAK2DSOKXV&keywords=elgato+hd+pro&qid=1645649492&sprefix=elgato+hd+pro%2Caps%2C78&sr=8-1&linkCode=li2&tag=gamestreamingsetup-20&linkId=4ad3618a21196e84b51fc42605dc074b&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014MQIVPS&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B014MQIVPS",
  },
  {
    name: "Mirabox",
    price: "$39.99",
    brand: "Mirabox",
    rating: "4.1",
    date: "September 28, 2016",
    details: "1080p60, 4k30 input, 4k30 Passthrough, Mac & Windows",
    buyLink: "https://amzn.to/35ncuwR",
    link: "",
    amazon1:
      "https://www.amazon.com/Mirabox-Passthrough-Nintendo-Streaming-Recording/dp/B08QJ84JNP?crid=1O5NV99ZAJ12F&keywords=capture%2Bcard&qid=1645649633&sprefix=capture%2Bcar%2Caps%2C76&sr=8-10&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=d79211879c18fa8ffdcca2e2f9d95a63&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08QJ84JNP&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08QJ84JNP",
  },
  {
    name: "AVerMedia Live Gamer Mini",
    price: "$99.99",
    brand: "AVerMedia",
    rating: "4.4",
    date: "April 29, 2019",
    details: "1080p60, Mac & Windows",
    buyLink: "https://amzn.to/3K6fIEr",
    link: "",
    amazon1:
      "https://www.amazon.com/AVerMedia-Live-Gamer-Mini-Recording/dp/B07R6P2JJR?crid=7OJGX9YRTWH5&keywords=video%2Bgame%2Bcapture%2Bcard&qid=1645650146&refinements=p_85%3A2470955011&rnid=2470954011&rps=1&sprefix=video%2Bgame%2Bcapture%2Bcard%2Caps%2C67&sr=8-12-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVEVPUUQ2SzlUNDNEJmVuY3J5cHRlZElkPUEwNDE2MTE3MVFJODYwRTJMNVNTNCZlbmNyeXB0ZWRBZElkPUEwNzI2NTA5MVcxNUhDMFhVM0tIMiZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=aa92ba66dd8f1a82d5c4f41d5c0f6090&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07R6P2JJR&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07R6P2JJR",
  },
  {
    name: "AVerMedia Live Gamer Portable 2 Plus",
    price: "$119.99",
    brand: "AVerMedia",
    rating: "4.4",
    date: "October 2, 2017",
    details: "4K Pass-Through, Full HD 1080p60",
    buyLink: "https://amzn.to/3p6IJri",
    link: "",
    amazon1:
      "https://www.amazon.com/AVerMedia-Live-Gamer-Mini-Recording/dp/B0763TFZWT?crid=7OJGX9YRTWH5&keywords=video%2Bgame%2Bcapture%2Bcard&qid=1645650146&refinements=p_85%3A2470955011&rnid=2470954011&rps=1&sprefix=video%2Bgame%2Bcapture%2Bcard%2Caps%2C67&sr=8-14&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=a63acaa0e573e6846e32f899eb3addd3&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0763TFZWT&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B0763TFZWT",
  },
  {
    name: "Elgato 4K60 S+",
    price: "$394",
    brand: "Elgato",
    rating: "4.6",
    date: "January 4, 2020",
    details: "4K60 Streaming, HEVC/H.264 Encoding, 200 Mbps, Direct to SD Recording option",
    buyLink: "https://amzn.to/3p6IJri",
    link: "",
    amazon1:
      "https://www.amazon.com/Elgato-External-Capture-1080p60-ultra-low/dp/B082N68RNS?keywords=elgato%2Bhd60&qid=1645648838&sr=8-2&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=55ce5a340c38e491f90c49193d2ba6b8&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B082N68RNS&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B082N68RNS",
  },
  {
    name: "GENKI ShadowCast",
    price: "$49.99",
    brand: "Human Things",
    rating: "4.2",
    date: "April 30, 2021",
    details: "Compact, 1080p30, Mac & Windows",
    buyLink: "https://amzn.to/3IhV03R",
    link: "",
    amazon1:
      "https://www.amazon.com/GENKI-ShadowCast-Consoles-Smallest-Performance/dp/B093V5WF8Y?crid=QK76785EHPTB&keywords=genki+capture+card&qid=1645651267&sprefix=genki+capture+card%2Caps%2C90&sr=8-3&linkCode=li2&tag=gamestreamingsetup-20&linkId=b6ff0931f9cf2d3d659b1b3c8a5acb6d&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B093V5WF8Y&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B093V5WF8Y",
  },
];

export default function Capturecards() {
  return (
    <div>
      <Head>
        <title>
          Video Game Capture Cards for Live Streaming | Elgato HD60 Mirabox avermedia
        </title>
        <meta name="description" content="Game Streaming Setup" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Capture cards are a must if you want to start streaming video
          games. But which one is the best for your needs? Find out here
          with our list of capture card and reviews."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamestreamingsetup.com" />
        <meta
          property="og:title"
          content="Video Game Capture Cards for Live Streaming | Twitch Streaming Video
          Games"
        />
        <meta
          property="og:description"
          content="Capture cards are a must if you want to start streaming video
          games. But which one is the best for your needs? Find out here
          with our list of capture card and reviews."
        />
        <meta
          property="og:image"
          content="https://gamestreamingsetup.com/gss-logo-long.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gamestreamingsetup.com" />
        <meta
          property="twitter:title"
          content="Video Game Capture Cards for Live Streaming | Twitch Streaming Video
          Games"
        />
        <meta
          property="twitter:description"
          content="Capture cards are a must if you want to start streaming video
          games. But which one is the best for your needs? Find out here
          with our list of capture card and reviews."
        />
        <meta
          property="twitter:image"
          content="https://gamestreamingsetup.com/gss-logo-long.png"
        />
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
                <h1>Video Game Capture Cards</h1>
                <p className="lead">
                  Capture cards are a must if you want to start streaming video
                  games. <br />
                  But which one is the best for your needs? Find out here with
                  our list of capture card and reviews.
                </p>
                <a className="btn btn-secondary" href="#list">
                  See the List
                </a>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <div className="gss-page-container">
        <div className="gss-table-container">
          <div className="col-lg-12">
            <Table id="list" striped bordered responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Details</th>
                  <th>Date Released</th>
                  <th>Buy Link</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr>
                    <td>
                      {product.name}
                      <br />
                      <a href={product.amazon1} target="_blank">
                        <img border="0" src={product.amazon2} />
                      </a>
                      <img
                        src={product.amazon3}
                        width="1"
                        height="1"
                        border="0"
                        alt=""
                      />
                    </td>
                    <td>{product.brand}</td>
                    <td>{product.price}</td>
                    <td>{product.rating}/5</td>
                    <td>{product.details}</td>
                    <td>{product.date}</td>
                    <td>
                      <a className="btn btn-secondary" href={product.buyLink}>
                        Buy
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
