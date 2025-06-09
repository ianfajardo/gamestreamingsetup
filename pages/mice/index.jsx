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
    name: "Razer DeathAdder V2 Pro Wireless",
    price: "$84.99",
    rating: "4.7",
    details:
      "70hr battery Hyperspeed Wireless and 120hr Bluetooth mode, 20k DPI Optical Sensor, Lightweight 88g design",
    brand: "Razer",
    buyLink: "https://amzn.to/3GohoIo",
    link: "",
    amazon1:
      "https://www.amazon.com/Razer-DeathAdder-Wireless-Gaming-Mouse/dp/B08FQMBKQG?crid=2ON5UKOY5C5JC&keywords=razer%2Bdeathadder%2Bv2&qid=1653572174&sprefix=razer%2Bdeathadder%2Bv2%2Caps%2C78&sr=8-3&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=534346bb60103311e2055815dfa59b1b&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08FQMBKQG&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08FQMBKQG",
  },
  {
    name: "Logitech G502 Lightspeed Wireless",
    price: "$116.63",
    brand: "Logitech",
    rating: "4.6",
    date: "October 1, 2015",
    details:
      "60hr Battery Life, 25k DPI Optical Sensor, 11 Customizable Buttons, Tunable Weight System",
    buyLink: "https://amzn.to/3NDJBxk",
    link: "",
    amazon1:
      "https://www.amazon.com/Logitech-Lightspeed-PowerPlay-Compatible-Lightsync/dp/B07L4BM851?crid=1VQY3Z3WBJOR9&keywords=logitech+gaming+mouse&qid=1653572598&sprefix=logitech+gaming+mouse%2Caps%2C81&sr=8-9&linkCode=li1&tag=gamestreamingsetup-20&linkId=c8920b802c3783aaecd6fe88039cb972&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B07L4BM851&Format=_SL110_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li1&o=1&a=B07L4BM851",
  },
  {
    name: "CORSAIR Sabre RGB PRO Champion",
    price: "$43.49",
    brand: "Corsair",
    rating: "4.6",
    date: "October 10, 2020",
    details:
      "Hyper-Polling up to 8000hz, 18k DPI Optical Sensor, Lightweight 74g design",
    buyLink: "https://amzn.to/38RlBbs",
    link: "",
    amazon1:
      "https://www.amazon.com/CORSAIR-Sabre-Champion-Gaming-Mouse/dp/B08W2J9JZ9?keywords=corsair%2Bsabre&link_code=qs&qid=1653572868&sr=8-2&th=1&linkCode=li2&tag=gamestreamingsetup-20&linkId=5456fbb68b0704176d1297fddf2fd83c&language=en_US&ref_=as_li_ss_il",
    amazon2:
      "//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08W2J9JZ9&Format=_SL160_&ID=AsinImage&MarketPlace=US&ServiceVersion=20070822&WS=1&tag=gamestreamingsetup-20&language=en_US",
    amazon3:
      "https://ir-na.amazon-adsystem.com/e/ir?t=gamestreamingsetup-20&language=en_US&l=li2&o=1&a=B08W2J9JZ9",
  },
];

var meta = {
  title: "Best Gaming Mice: The Definitive Guide | gaming mouse amazon",
  description:
    "The definitive guide to the best gaming mice with reviews and rankings. Which mouse is right for you?",
  url: "https://gamestreamingsetup.com/mice",
  image: "https://gamestreamingsetup.com/gaming-mouse.jpg",
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
              "url('/gaming-mouse.jpg') center center / cover no-repeat ",
          }}
        >
          <Navigation bg="transparent"></Navigation>
          <div className="container gss-page-head">
            <div className="row">
              <div className="col-lg-12">
                <h1>Best Gaming Mice: The Definitive Guide</h1>
                <p className="lead">
                  The definitive guide to the best gaming mice with reviews and
                  rankings. Which mouse is right for you?
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <div className="gss-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Factors To Consider Before Buying A Mouse For Gamers</h2>
              <p>
                Gaming mice are a popular accessory for gamers. These
                peripherals are designed to be portable, ergonomic and offer
                high performance specifications to suit the needs of gamers.
                There are many different models available, but which one is the
                best? There are a couple factors that you need to consider:
              </p>
              <ul>
                <li>
                  <strong>Sensor Technology</strong>: The sensor technology in
                  the mouse can be optical or laser. Optical sensors are more
                  affordable but they are not as accurate as laser sensors.
                  Laser sensors are more expensive but they offer much better
                  accuracy than optical sensors.
                </li>
                <li>
                  <strong>DPI</strong>: DPI stands for dots per inch and it
                  determines how sensitive the mouse will be on your desktop
                  surface. A higher DPI means that the cursor on your screen
                  will move faster.
                </li>
                <li>
                  <strong>Weight</strong>: The weight of the mouse will
                  determine how easy it is to control while moving your hand. A
                  heavier mouse is good for people who need more control and a
                  lighter mouse is good for gamers or people who need less
                  precision on their keyboard.
                </li>
                <li>
                  <strong>Connectivity</strong>: Wireless mice are great so you
                  don't have to worry about a wire, but wired mice are more
                  reliable when it comes to lag
                </li>
                <li>
                  <strong>Cable length</strong>: This will vary depending on the
                  type of mouse you choose. A cable that is too short is hard to
                  use while a cable that is too long will make you move slower
                  while using the mouse.
                </li>
                <li>
                  <strong>Warranty</strong>: Most mice come with a warranty, but
                  this may not be available in all cases.
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <img
                src="/gaming-mouse.jpg"
                alt="Gaming Mouse"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2>The Best Gaming Mouse Brands</h2>
              <p>
                The best gaming mouse brands are ranked based on popularity,
                price, and performance. Since there are so many choices
                available in the market today, it can be difficult to find the
                perfect mouse that suits your needs and budget. From our
                research and testing; we found that Logitech, Corsair and Razer
                all have a wide range of budget to pro gaming mice.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <h3>Logitech</h3>
              <a href="https://amzn.to/3z0U9T6">
                <img
                  src="/logitech-mouse.jpg"
                  alt="Gaming Mouse"
                  className="img-fluid"
                />
              </a>

              <p></p>
              <a href="https://amzn.to/3z0U9T6" className="btn btn-secondary">
                Learn More
              </a>
            </div>
            <div className="col-lg-4">
              <h3>Razer</h3>
              <a href="https://amzn.to/3NyOCaA">
                <img
                  src="/razer-mouse.jpg"
                  alt="Gaming Mouse"
                  className="img-fluid"
                />
              </a>
              <p></p>
              <a href="https://amzn.to/3NyOCaA" className="btn btn-secondary">
                Learn More
              </a>{" "}
            </div>
            <div className="col-lg-4">
              <h3>Corsair</h3>
              <a href="https://amzn.to/3MSVU95">
                <img
                  src="/corsair-mouse.jpg"
                  alt="Gaming Mouse"
                  className="img-fluid"
                />
              </a>

              <p></p>
              <a href="/mice/corsair" className="btn btn-secondary">
                Learn More
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h2>3 Top Rated Gaming Mice Reviewed & Ranked</h2>
              <p>
                The gaming mouse is an important peripheral for any gamer, and
                it’s important to get the right one. The market is full of
                options and finding the right one can be difficult.
              </p>
              <p>
                We have narrowed down our search to three of the best-rated
                gaming mice available in the market right now. These three mice
                have been ranked based on their performance, design and price.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <div className="col-lg-12">
          <Table id="list" striped bordered responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Details</th>

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
                  <td>{product.details}</td>
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

      <Footer />
    </div>
  );
}
