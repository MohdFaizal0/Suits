import React, { useEffect, useRef } from "react";
import banner from "../../assets/banner.webp";
import city from "../../assets/home/City_AM.avif";
import esquire from "../../assets/home/esquire.avif";
import ft from "../../assets/home/FT.avif";
import gq from "../../assets/home/GQ.avif";
import times from "../../assets/home/The_Times.avif";
import store from "../../assets/store.webp";
import store2 from "../../assets/store2.webp";
import collection1 from "../../assets/collections/collection1.webp";
import collection2 from "../../assets/collections/collection2.webp";
import collection3 from "../../assets/collections/collection3.webp";
import collection4 from "../../assets/collections/collection4.webp";
import collection5 from "../../assets/collections/collection5.webp";
import collection6 from "../../assets/collections/collection6.webp";
import collection7 from "../../assets/collections/collection7.webp";
import collection8 from "../../assets/collections/collection8.webp";
import fabric from "../../assets/home/fabric.jpg";
import wardrobe from "../../assets/home/wardrobe.webp";
import customer from "../../assets/home/customer.webp";
import weddingSuits from "../../assets/home/weddingSuits.webp";
import lookBook from "../../assets/home/lookbook.webp";

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import "./home.css";

const Home = () => {
  const galleryRef = useRef(null);

  const scrollGallery = (scrollOffset) => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const preventDefault = (e) => {
      if (e.type === "wheel" && e.deltaX !== 0) {
        e.preventDefault();
      } else if (e.type.includes("touch") || e.type === "scroll") {
        e.preventDefault();
      }
    };

    const events = ["wheel", "touchmove", "scroll", "touchstart", "touchend"];

    events.forEach((event) => {
      gallery.addEventListener(event, preventDefault, { passive: false });
    });

    return () => {
      events.forEach((event) => {
        gallery.removeEventListener(event, preventDefault);
      });
    };
  }, []);
  return (
    <>
      <div className="container-fluid p-0">
        <div className="banner container-fluid p-0 position-relative">
          <img
            src={banner}
            alt=""
            className="img-fluid w-100"
            style={{
              height: "75vh",
              objectFit: "cover",
              objectPosition: "left center",
            }}
          />
          <div
            className="position-absolute bottom-0 start-0 end-0 text-white p-2 p-md-5 px-sm-5"
            style={{
              width: "100%",
            }}
          >
            <div className="w-100">
              <h1 className="fs-1 fs-md-1 fw-semi-bold">
                BUILD YOUR TAILORED WARDROBE
              </h1>
              <p className="fs-6 fs-md-4 mb-3 text-wrap">
                Custom tailored suits,shirts,chinos,and outerwear-
                <br className="d-none d-md-block" />
                made to your personal measurments
              </p>
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-start justify-content-sm-start gap-3">
                <div className="book-btn-wrapper w-md-auto d-flex justify-content-center justify-content-md-start">
                  <button className="book-btn">Book Your Appointment</button>
                </div>
                <p className="text-center text-md-start mb-0">
                  4.8 out of 5 stars from <u>+250 Google reviews</u>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0 d-flex justify-content-center align-items-center border">
          <div className="img-wrapper">
            <img src={city} alt="" className="img-fluid logo-img" />
          </div>
          <div className="img-wrapper">
            <img src={esquire} alt="" className="img-fluid logo-img" />
          </div>
          <div className="img-wrapper">
            {" "}
            <img src={ft} alt="" className="img-fluid logo-img" />
          </div>
          <div className="img-wrapper">
            <img src={gq} alt="" className="img-fluid logo-img" />
          </div>
          <div className="img-wrapper">
            {" "}
            <img src={times} alt="" className="img-fluid logo-img" />
          </div>
        </div>
        <div className="container-fluid p-0 d-flex flex-column flex-md-row">
          <img
            src={store}
            alt=""
            className="store"
            style={{ maxHeight: "400px" }}
          />
          <div className="store-right container px-4 fs-5 d-flex justify-content-center flex-column">
            <p>HOW IT WORKS</p>
            <div className="underline p-0"></div>
            <div className="mt-4">
              <p className="fs-6 fs-md-5 fs-lg-4">
                1. BOOK YOUR APPOINTMENT <br /> Book your appointment at our
                showrooms
              </p>
              <p className="fs-6 fs-md-5 fs-lg-4">
                2. GET MEASURED <br /> Choose from our wide range of fabrics and
                customisations to create your custom itmes
              </p>
              <p className="fs-6 fs-md-5 fs-lg-4">
                3. ENJOY THE PERFECT FIT <br />
                Receive your items in 3-5 weeks. Reorder at our store or online
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex flex-column flex-md-row mt-5 gap-3">
          <form className="container-fluid px-5">
            <p className="fs-5 fs-md-4 fs-lg-4 mb-0">Book Your Appointment</p>
            <p className="fs-6 fs-md-5 fs-lg-4">Enter Your Details</p>
            <div className="d-flex gap-4">
              <input
                type="text"
                placeholder="First name*"
                className="p-2 w-100 rounded border border-secondary border-opacity-75"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="p-3 w-100 rounded border border-secondary border-opacity-75"
              />
            </div>
            <input
              type="email"
              className="w-100 p-3 mt-3 rounded border border-secondary border-opacity-75"
              placeholder="Email address*"
            />
            <div className="d-flex mt-3">
              <select
                name="countryCode"
                id=""
                className="w-25 rounded-start border border-secondary border-opacity-75"
              >
                <option data-countrycode="GB" value="44">
                  UK (+44)
                </option>
                <option data-countrycode="US" value="1">
                  USA (+1)
                </option>
                <optgroup label="Other countries">
                  <option data-countrycode="IND" value="91">
                    India (+91)
                  </option>
                </optgroup>
              </select>
              <input
                type="tel"
                placeholder="Phone number*"
                className="p-3 rounded-end w-100 border border-secondary border-opacity-75"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white p-3 rounded mt-4"
            >
              Book Your Appointment
            </button>
          </form>
          <div className="container-fluid d-flex justify-content-center">
            <img
              src={store2}
              alt=""
              className="img-fluid"
              style={{ height: "400px" }}
            />
          </div>
        </div>
        <div className="container-fluid mt-5 ps-5 position-relative gallery-container border">
          <p className="fs-2 ">OUR ONLINE COLLECTION</p>
          <div className="underline"></div>
          <button
            className="scroll-btn left-scroll-btn"
            onClick={() => scrollGallery(-300)}
          >
            &lt;
          </button>

          <button
            className="scroll-btn right-scroll-btn"
            onClick={() => scrollGallery(300)}
          >
            &gt;
          </button>

          <div
            ref={galleryRef}
            className="gallery-scroll-container"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              height: "350px",
            }}
          >
            <div className="collection-item">
              <img
                src={collection1}
                alt="SS25 Collection"
                className="collection img-fluid"
              />
              <p className="collection-name">TAILORED SHIRTS</p>
            </div>
            <div className="collection-item">
              <img
                src={collection2}
                alt="Collection 2"
                className="collection img-fluid"
              />
              <p className="collection-name">BLAZERS</p>
            </div>
            <div className="collection-item">
              <img
                src={collection3}
                alt="Collection 3"
                className="collection img-fluid"
              />
              <p className="collection-name">TAILORED SUITS</p>
            </div>
            <div className="collection-item">
              <img
                src={collection4}
                alt="Collection 4"
                className="collection img-fluid"
              />
              <p className="collection-name">TUXEDOS</p>
            </div>
            <div className="collection-item">
              <img
                src={collection5}
                alt="Collection 5"
                className="collection img-fluid"
              />
              <p className="collection-name">CHINOS</p>
            </div>
            <div className="collection-item">
              <img
                src={collection6}
                alt="Collection 6"
                className="collection img-fluid"
              />
              <p className="collection-name">SMART CASUAL</p>
            </div>
            <div className="collection-item">
              <img
                src={collection7}
                alt="Collection 7"
                className="collection img-fluid"
              />
              <p className="collection-name">SS25</p>
            </div>
            <div className="collection-item">
              <img
                src={collection8}
                alt="Collection 8"
                className="collection img-fluid"
              />
              <p className="collection-name">Classics</p>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0 mt-5 position-relative">
          <img
            src={fabric}
            alt=""
            className="img-fluid"
            style={{ height: "auto", minHeight: "400px", objectFit: "cover" }}
          />
          <div className="container position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center">
            <div className="row justify-content-end">
              <div className="col-12 col-md-8 col-lg-6">
                <div className="text-white p-md-4">
                  <p className="h2 mb-3">OUR FABRICS</p>
                  <div className="border-top border-white mb-3 w-100"></div>
                  <p className="mb-4">
                    Our fabrics are handpicked from some of the world's leading
                    mills. From fine cottons to rich wools, we choose each one
                    for its quality, comfort, and longevity.
                  </p>
                  <button className="book-btn">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex flex-column flex-md-row mt-5 gap-4">
          <div className="container-fluid p-0">
            <img src={wardrobe} className="img-fluid" alt="" />
          </div>
          <div className="container-fluid d-flex flex-column justify-content-center py-4 fs-5">
            <p>
              <b>LETS BUILD YOUR MODULAR WARDROBE</b>
            </p>
            <div className="underline"></div>
            <p>
              Build a wardrobe that does more with less , where each piece mixes
              and mathes seamlessly, giving you endless styling options. Each of
              our showrooms now offers a personalised wardrobe building service.
            </p>
            <p>
              Learn how to effortlessly pair tailored separates together with
              our simple modular wardrobe guide.
            </p>
            <button className="learn-btn-white">Learn more</button>
          </div>
        </div>
        <div className="container-fluid d-flex flex-column flex-md-row mt-5 gap-4">
          <div className="container-fluid py-5 px-0 ps-4 d-flex justify-content-center flex-column fs-5">
            <p>
              <b>MEET OUR CUSTOMERS</b>
            </p>
            <div className="underline"></div>
            <p>
              Sharp tailoring. Individual style. Meet our customers who have
              custom-designd their unique peices.
            </p>
            <button className="learn-btn-white">See more</button>
          </div>
          <div className="container-fluid p-0">
            <img src={customer} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="container-fluid p-0 mt-5 position-relative">
          <img
            src={weddingSuits}
            className="img-fluid w-100"
            alt=""
            style={{ objectFit: "cover", height: "auto", minHeight: "400px" }}
          />
          <div
            className="position-absolute end-0 top-0 h-100 text-white d-flex justify-content-center flex-column px-4 px-md-5 py-4 "
            style={{ width: "100%", maxWidth: "600px" }}
          >
            <p className="fs-5 fs-md-4 mb-3">
              <b>WEDDING SUITS</b>
            </p>
            <div className="underline border "></div>
            <p className="fs-6 fs-md-5 mb-3">
              With thousands of fabrics and countless customisation options
              available, we can relieve much of the pressure of finding the
              perfect wedding suit by helping you to create your own.
            </p>
            <button className="book-btn mt-2">See the collection</button>
          </div>
        </div>
        <div className="container-fluid d-flex flex-column flex-md-row mt-5 gap-4">
          <div className="container-fluid fs-5 d-flex flex-column justify-content-center px-0 ps-4">
            <p>
              <b>OUR NEW COLLECTION</b>
            </p>
            <div className="underline"></div>
            <p>
              Our new collection is crafted to build a modular wardrobe with
              tailored seprates that effortlessly mix and match.
            </p>
            <button className="learn-btn-white">See the Lookbook</button>
          </div>
          <div className="container-fluid p-0">
            <img src={lookBook} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
