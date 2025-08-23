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
    name: "Corsair M65 PRO RGB",
    price: "$39",
    rating: "4.4",
    date: "May 1, 2016",
    details:
      "12,000 DPI, Adjustable Weights, 8 Programmable Buttons, 3-Zone RGB",
    buyLink: "https://amzn.to/3G1g2U4",
    link: "",
    amazon1:
      "https://www.amazon.com/Corsair-Adjustable-Programmable-Multi-Colour-Backlighting/dp/B01D524BUY?crid=3O437EA9F6JSE&keywords=corsair%2Bgaming%2Bmouse&qid=1653568835&refresh=1&sprefix=corsair%2Bgaming%2Bmouse%2Caps%2C60&sr=8-13&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=6c597aaec3d017aa939e2328d8e4a152&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01D524BUY&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B01D524BUY",
  },
  {
    name: "Corsair Nightsword RGB",
    price: "$69.99",
    rating: "4.6",
    date: "October 1, 2015",
    details:
      "18,000 DPI, Adjustable Weights between 119g and 141g, 10 Programmable Buttons",
    buyLink: "https://amzn.to/3NFQiPM",
    link: "",
    amazon1:
      "https://www.amazon.com/Corsair-Nightsword-Performance-Tunable-Backlit/dp/B07QX9C9WH?crid=3O437EA9F6JSE&keywords=corsair%2Bgaming%2Bmouse&qid=1653568835&refresh=1&sprefix=corsair%2Bgaming%2Bmouse%2Caps%2C60&sr=8-3&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=30e9dab742f4d62624c6f6d44218da2e&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07QX9C9WH&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07QX9C9WH",
  },
  {
    name: "Corsair Scimitar RGB Elite",
    price: "$71.99",
    rating: "4.4",
    date: "January 23, 2020",
    details:
      "18,000 DPI, Adjustable Weights between 119g and 141g, 17 Programmable Buttons with side slider",
    buyLink: "https://amzn.to/3wPr3nc",
    link: "",
    amazon1:
      "https://www.amazon.com/Corsair-Scimitar-Gaming-Backlit-Optical/dp/B082LRMY53?crid=3O437EA9F6JSE&keywords=corsair%2Bgaming%2Bmouse&qid=1653568835&refresh=1&sprefix=corsair%2Bgaming%2Bmouse%2Caps%2C60&sr=8-4&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=038dfc75187a916a0a2e10a6fc2fbcd6&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B082LRMY53&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B082LRMY53e",
  },
  {
    name: "Corsair Harpoon RGB Wireless",
    price: "$49.99",
    rating: "4.5",
    date: "April 29, 2019",
    details:
      "Wireless, Up to 60hr Battery Life, 10,000 DPI, 6 Programmable Buttons with side slider, Lightweight weighing 99g",
    buyLink: "https://amzn.to/3PI8gmk",
    link: "",
    amazon1:
      "https://www.amazon.com/CORSAIR-Harpoon-RGB-Wireless-Rechargeable/dp/B07KQWR72Z?crid=3O437EA9F6JSE&keywords=corsair+gaming+mouse&qid=1653568835&refresh=1&sprefix=corsair+gaming+mouse%2Caps%2C60&sr=8-6&linkCode=li2&tag=gamestreamingsetup-20&linkId=ed03078ac28d712dc68a407a9931279a&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07KQWR72Z&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07KQWR72Z",
  },
  {
    name: "Corsair Katar Pro XT",
    price: "$29.99",
    brand: "Shure",
    rating: "4.5",
    date: "February 25, 2021",
    details:
      "18,000 DPI, Lightweight weighing 73g, CORSAIR QUICKSTRIKE buttons use a spring-loaded design, delivering zero gap between the left and right click buttons",
    buyLink: "https://amzn.to/38KpC1u",
    link: "",
    amazon1:
      "https://www.amazon.com/Corsair-Katar-Ultra-Light-Gaming-Mouse/dp/B08SHCKVTG?keywords=corsair+katar&link_code=qs&qid=1653569997&sr=8-3&linkCode=li2&tag=gamestreamingsetup-20&linkId=c22805c33decf033dc98d08cf143c9c5&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08SHCKVTG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08SHCKVTG",
  },
  {
    name: "Corsair Ironclaw Wireless RGB ",
    price: "$79.99",
    rating: "4.2",
    date: "April 25, 2019",
    details:
      "Wireless, Up to 50hr Battery Life, 18,000 DPI, Lightweight weighing 73g, 10 Programmable Buttons",
    buyLink: "https://amzn.to/3Nx4gmK",
    link: "",
    amazon1:
      "https://www.amazon.com/CORSAIR-IRONCLAW-Wireless-RGB-Slipstream/dp/B07Q424WFW?crid=3OAKJ44WL9VZJ&keywords=corsair%2Bwireless%2Bmouse&qid=1653570315&sprefix=corsair%2Bwireless%2Caps%2C46&sr=8-5&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=7eb1ac3612fa146d26ed99b21b6054aa&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07Q424WFW&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B07Q424WFW",
  },
];

var meta = {
  title:
    "Corsair Mice | We rank every Corsair Mouse with details, price, ratings, and more. Corsair gaming mouse, corsair gaming mouse wireless",
  description:
    "Corsair Gaming Mice reviews, ratings, and prices. Compare the best mice from Corsair Gaming with our handy chart to find the perfect mouse for your playstyle.",
  url: "https://gamestreamingsetup.com/mice/corsair",
  image: "https://gamestreamingsetup.com/corsair-mouse.jpg",
};

export default function Corsair() {
  return (
    <div>
      <SEOHead meta={meta} />
      <LazyLoad>
        <div
          className="gss-page-nav ele-3 half"
          style={{
            background:
              "url('/corsair-mouse.jpg') center center / cover no-repeat ",
          }}
        >
          <Navigation bg="transparent"></Navigation>
          <div className="container gss-page-head">
            <div className="row">
              <div className="offset-lg-2 col-lg-8">
                <h1>Corsair Mice</h1>
                <p className="lead">
                  Corsair Gaming Mice reviews, ratings, and prices. Compare the
                  best mice from Corsair Gaming with our handy chart to find the
                  perfect mouse for your playstyle.
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
          <div className="row mb-5 ">
            <div className="col-lg-12 ">
              <h3>Corsair Gaming Mouse Chart</h3>
              <p>
                If you are a gamer, then you know how important it is to have
                the best gaming mouse. It is not just about having a mouse that
                feels good in your hand. You also need to make sure that it has
                all the features and functions that you need for your game.
              </p>

              <p>
                The Corsair Gaming Mouse has been designed with gamers in mind.
                It offers a variety of different options so that every type of
                gamer can find what they want. This includes options for gamers
                who play competitively and those who play casually.
              </p>

              <p>
                Corsair Gaming Mice are affordable and come with a warranty,
                which means they will last long enough for you to get your
                money’s worth out of them before they break down on you.We've
                compiled a list of the best, most popular Corsair Gaming Mice
                and have their ratings, reviews and prices in our handy chart.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Table id="list" striped bordered responsive>
                <thead>
                  <tr>
                    <th>Name</th>
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
      </div>

      <Footer />
    </div>
  );
}
