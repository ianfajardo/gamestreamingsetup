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
    name: "Logitech Brio",
    price: "$199",
    rating: "4.6",
    date: "February 7, 2017",
    details: "4k HD Resolution, Noise-Canceling Mic, HDR, Wide Lens, PC/Mac",
    brand: "Logitech",
    buyLink: "https://amzn.to/3NYa1Lq",
    link: "",
    amazon1:
      "https://www.amazon.com/Logitech-Calling-Noise-Canceling-Correction-Microsoft/dp/B01N5UOYC4?crid=852477YO6MQF&keywords=logitech%2Bbrio&qid=1649384974&sprefix=logitech%2Bbrio%2Caps%2C88&sr=8-3&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=6e1c82377c64051178756e4f0db4cf98&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01N5UOYC4&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B01N5UOYC4",
  },
  {
    name: "Elgato Facecam",
    price: "$169.99",
    brand: "Elgato",
    rating: "4.4",
    date: "October 1, 2015",
    details:
      "1080p Resolution, Uncompressed video footage, 82 degree field of view for full frame or wide angle, Sony Sensor, Studio quality f/2.4 24 mm* all-glass Elgato Prime Lens, PC & Mac",
    buyLink: "https://amzn.to/3JiUsKD",
    link: "",
    amazon1:
      "https://www.amazon.com/Elgato-Facecam-Conferencing-Streaming-Fixed-Focus/dp/B0973DV11T?crid=OF2I3J816MP6&keywords=elgato%2Bwebcam&qid=1649385060&sprefix=elgato%2Bwebcam%2Caps%2C79&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWkVORjhYR080UkpWJmVuY3J5cHRlZElkPUEwNjYzMjEyM1NMTUJaU1FVRVlIMiZlbmNyeXB0ZWRBZElkPUEwNDIxNjgxM1I1RENCWTNaTEVYNSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=0b805245173b4c6e6221a184158ec8ec&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0973DV11T&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B0973DV11T",
  },
  {
    name: "Razer Kiyo Pro",
    price: "$99.99",
    brand: "Razer",
    rating: "4.4",
    date: "February 23, 2021",
    details:
      "1080px/60fps Resolution, Adaptive Light Sensor, HDR, Wide Angle Lens, Mac & Windows",
    buyLink: "https://amzn.to/3jhzwJt",
    link: "",
    amazon1:
      "https://www.amazon.com/Razer-Kiyo-Streaming-Webcam-High-Performance/dp/B08T1MWX6J?crid=QUL2I2MXCCTS&keywords=razer%2Bwebcam&qid=1649385330&sprefix=razer%2Bwebcam%2Caps%2C75&sr=8-3&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=83b3eacd81b2cb0ca2a79b219ff054d3&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08T1MWX6J&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08T1MWX6J",
  },
  {
    name: "Logitech C920x",
    price: "$69.99",
    brand: "Logitech",
    rating: "4.7",
    date: "March 31, 2020",
    details: "1080p/60fs Resolution, Dual mics, Mac & Windows",
    buyLink: "https://amzn.to/3LSzfcj",
    link: "",
    amazon1:
      "https://www.amazon.com/Logitech-C920x-Pro-HD-Webcam/dp/B085TFF7M1?crid=206F2KT4MN2CS&keywords=webcam&qid=1649385472&sprefix=webcam%2Caps%2C79&sr=8-4&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=be223d2b7d55ae15be18433432b1fa87&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B085TFF7M1&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B085TFF7M1",
  },
  {
    name: "Anker PowerConf C300",
    price: "$129.00",
    brand: "Anker",
    rating: "4.5",
    date: "December 30, 2020",
    details:
      "1080p/60fps resolution, Voice Cancelation, Adjust Field of View, Dual Mics, Windows & Mac",
    buyLink: "https://amzn.to/3jeA1ny",
    link: "",
    amazon1:
      "https://www.amazon.com/Anker-AI-Powered-Noise-Cancelling-Microphones-Adjustable/dp/B08RNHCZ3K?crid=YSHM24P5EHOU&keywords=video+game+webcam&qid=1649385613&sprefix=video+game+webcam%2Caps%2C77&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEySU42R0hSNjBFOVUyJmVuY3J5cHRlZElkPUEwNjg2Nzc0MTFUTEZOUjVQNlpSUSZlbmNyeXB0ZWRBZElkPUEwNTkyMzY0MVpLVk1XOUVRWEM1OSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU%3D&linkCode=li2&tag=gamestreamingsetup-20&linkId=c19d3045aeda057339d62076150ee1e1&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08RNHCZ3K&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08RNHCZ3K",
  },
  {
    name: "Logitech StreamCam",
    price: "$169",
    brand: "Logitech",
    rating: "4.5",
    date: "February 11, 2020",
    details:
      "1080p/60fps, Smart Autofocus, 78 Degree field of view, Stereo Microphone, Windows & Mac",
    buyLink: "https://amzn.to/3M6vYX1",
    link: "",
    amazon1:
      "https://www.amazon.com/Logitech-Streamcam-Streaming-YouTube-Graphite/dp/B07TZT4Q89?crid=3SMXK18DHMJMQ&keywords=logitech%2Bwebcam&qid=1649385782&sprefix=logitech%2Bwebca%2Caps%2C75&sr=8-15&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=2ef5337a3473440501161408d19092a8&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07TZT4Q89&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07TZT4Q89",
  },
];

var meta = {
  title:
    "The Best Webcams and Cameras for Streaming in 2022 | Audio Technica Microphone Razer Microphone",
  description:
    "Choosing the right webcam can be tricky. Whether you're a gamer or a business user using video conferencing, this list of our top picks for the best webcam will help you find the one for your needs.",
  url: "https://gamestreamingsetup.com/video",
  image: "https://gamestreamingsetup.com/webcams.jpg",
};

export default function Video() {
  return (
    <div>
      <SEOHead meta={meta} />
      <LazyLoad>
        <div
          className="gss-page-nav ele-3 half"
          style={{
            background:
              "url('/webcams.jpg') center center / cover no-repeat ",
          }}
        >
          <Navigation bg="transparent"></Navigation>
          <div className="container gss-page-head">
            <div className="row">
              <div className="offset-lg-2 col-lg-8">
                <h1>The Best Webcams and Cameras for Streaming in 2022</h1>
                <p className="lead">
                  Choosing the right webcam can be tricky. Whether you're a
                  gamer or a business user using video conferencing, this list
                  of our top picks for the best webcam will help you find the
                  one for your needs.
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
