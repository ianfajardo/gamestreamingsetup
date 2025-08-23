import Head from "next/head";
import LazyLoad from "react-lazyload";
import Image from "next/image";

import Table from "react-bootstrap/Table";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import stock1 from "../../public/video-game-capture-card.jpg";
import yeti from "../../public/yeti-mic.jpeg";

import stock3 from "../../public/gss-stock-3.jpg";
import SEOHead from "../../components/SEOhead";

var products = [
  {
    name: "Audio-Technica AT2020USB+",
    price: "$149",
    rating: "4.7",
    date: "January 25, 2013",
    details:
      "Condenser Microphone, USB Powered, Cardiod Polar Pattern, 44.1 kHz/48 kHz Sample Rate, PC & Mac",
    brand: "Audio-Technica",
    buyLink: "https://amzn.to/3NUQpaO",
    link: "",
    amazon1:
      "https://www.amazon.com/Audio-Technica-AT2020USB-Cardioid-Condenser-Microphone/dp/B00B5ZX9FM?crid=3VW5UPN19YE0I&keywords=audio%2Btechnica%2Bmicrophone%2Busb&qid=1649376470&sprefix=audio%2Btechnica%2Bmicrophone%2Bus%2Caps%2C129&sr=8-5&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=036ae098c11a3d4b0579354a449d49fc&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B00B5ZX9FM&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B00B5ZX9FM",
  },
  {
    name: "Blue Snowball iCE ",
    price: "$49.99",
    brand: "Blue",
    rating: "4.6",
    date: "October 1, 2015",
    details:
      "Retro Design, Condenser Microphone, USB Powered, Cardiod Polar Pattern, Compatible with Blue VO!CE Effects, 16-bit/44kHz Sample Rate, PC & Mac",
    buyLink: "https://amzn.to/35WfOju",
    link: "",
    amazon1:
      "https://www.amazon.com/Blue-Snowball-Condenser-Microphone-Cardioid/dp/B014PYGTUQ?crid=4LYIY65SQ8QJ&keywords=Blue%2Bsnowball&qid=1649379507&sprefix=blue%2Bsnowball%2Caps%2C77&sr=8-2&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=6041751db9b484fd9cd153824b48e287&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B014PYGTUQ&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B014PYGTUQ",
  },
  {
    name: "Razer Seiren Mini USB",
    price: "$49.99",
    brand: "Razer",
    rating: "4.6",
    date: "October 10, 2020",
    details: ", Mac & Windows",
    buyLink: "https://amzn.to/3DOZ7Ty",
    link: "",
    amazon1:
      "https://www.amazon.com/Razer-Seiren-Mini-Streaming-Microphone/dp/B08HH3FTYT?keywords=razer%2Bseiren%2Bmini&qid=1649380440&sprefix=razer%2Bse%2Caps%2C89&sr=8-2&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=ea8feafd737b457ec35efc83363ffe50&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08HH3FTYT&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08HH3FTYT",
  },
  {
    name: "Blue Yeti Nano",
    price: "$79.99",
    brand: "Blue",
    rating: "4.6",
    date: "April 29, 2019",
    details:
      "Cardiod/Omni Patterns, Compatible with Blue VO!CE Effects, 24-bit/48kHz Sample Rate 1080p60, Mac & Windows",
    buyLink: "https://amzn.to/3xcE63R",
    link: "",
    amazon1:
      "https://www.amazon.com/Blue-Microphone-Podcasting-No-Latency-Monitoring/dp/B07QLNYBG9?crid=13J30DQWKF5TP&keywords=blue%2Byeti&qid=1649380006&sprefix=blue%2Byeti%2Caps%2C68&sr=8-3&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=897a72d306ad3ae0e34b0fccdaccee4d&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QLNYBG9&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07QLNYBG9",
  },
  {
    name: "Shure MV7 USB Podcast Microphone",
    price: "$224.00",
    brand: "Shure",
    rating: "4.8",
    date: "October 26, 2020",
    details:
      "USB & XLR Connections, 4K Pass-Through, Full HD 1080p60 Windows & Mac",
    buyLink: "https://amzn.to/3KyEJbC",
    link: "",
    amazon1:
      "https://www.amazon.com/Shure-Microphone-Podcasting-Voice-Isolating-Technology/dp/B08G7RG9ML?crid=3DZJ1UFWPF1D3&keywords=Shure%2BMV7%2BUSB%2BPodcast%2BMicrophone&qid=1649381627&sprefix=shure%2Bmv7%2Busb%2Bpodcast%2Bmicrophone%2Caps%2C176&sr=8-2&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=071f0cc91198d6d65aee522c25892bb9&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08G7RG9ML&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08G7RG9ML",
  },
  {
    name: "Elgato Wave:3",
    price: "$149",
    brand: "Elgato",
    rating: "4.7",
    date: "January 4, 2020",
    details:
      "Cardioid Polar Pattern, 24-bit/96kHz Bitrate, USB-C, Clipguard Technology, Multi-function Dial",
    buyLink: "https://amzn.to/3xcSNnF",
    link: "",
    amazon1:
      "https://www.amazon.com/Elgato-Wave-Microphone-Podcasting-Capacitive/dp/B088HHWC47?crid=2IR7LMDBWWY0H&keywords=elgato%2Bwave&qid=1649381424&sprefix=elgato%2Bwave%2B%2Caps%2C76&sr=8-3&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=e6e3ba959343ae5a89a5072781d7831f&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B088HHWC47&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B088HHWC47",
  },
];

var meta = {
  title:
    "The Best Microphones for Video Game Streaming in 2022 | Audio Technica Microphone Razer Microphone",
  description:
    "We rank the best microphones for video game streaming in 2022. Our list includes Blue Snowball, Audio-Technica ATR2020-USB, Samson Meteor Mic, and more.",
  url: "https://gamestreamingsetup.com/microphones",
  image: "https://gamestreamingsetup.com/audio-technica-microphone.jpg",
};

export default function Microphones() {
  return (
    <div>
      <SEOHead meta={meta} />
      <LazyLoad>
        <div
          className="gss-page-nav ele-3 half"
          style={{
            background:
              "url('/streaming-microphone.jpg') center center / cover no-repeat ",
          }}
        >
          <Navigation bg="transparent"></Navigation>
          <div className="container gss-page-head">
            <div className="row">
              <div className="offset-lg-2 col-lg-8">
                <h1>The Best Microphones for Video Game Streaming in 2022</h1>
                <p className="lead">
                  We rank the best microphones for video game streaming in 2022.
                  Our list includes Blue Snowball, Audio-Technica ATR2020-USB,
                  Samson Meteor Mic, and more.
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
                      <strong>{product.name}</strong>
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
