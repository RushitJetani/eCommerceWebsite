import React from "react";
import NavBar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import ProductDetail from "../components/ProductDetail";
import Sidebar from "../components/Sidebar";
import Cart from "../components/Cart";

const ProductDetailPage = () => {
  return (
    <>
      <NavBar />
      <PageHeading title="Home / About" />
      <section className="section section-center">
        <div className="title">
          <span />
          <h2>About Us</h2>
          <span />
        </div>
        <p className="about-text">
          Welcome to our ecommerce website! We are a dedicated team of
          passionate individuals who share a common goal of providing our
          customers with the best possible online shopping experience. Our
          mission is to make it easy and convenient for you to find and purchase
          the products you need, while offering exceptional customer service
          along the way.
        </p>
        <p className="about-text">
          We understand that the world of ecommerce can be overwhelming at
          times, which is why we strive to make your experience as seamless as
          possible. From browsing our selection of high-quality products to
          placing your order and receiving your package, we are committed to
          ensuring that every step of the process is simple, straightforward,
          and enjoyable.
        </p>
        <p className="about-text">
          At our core, we believe that our customers are the heart and soul of
          our business. Without you, we wouldn't be where we are today. That's
          why we are committed to providing you with exceptional customer
          service and support, no matter what your needs may be.
        </p>
        <p className="about-text">
          Thank you for choosing to shop with us. We look forward to serving you
          and helping you find exactly what you're looking for.
        </p>
      </section>
	  <section className="section section-center">
        <div className="title">
          <span />
          <h2>Contact Us</h2>
          <span />
        </div>
        <p className="about-text">
          Rushit Jetani<br></br>
          jetanirushit6@gmail.com<br></br>
          +91 9510807051
        </p>
      </section>
      <Sidebar />
      <Cart />
    </>
  );
};

export default ProductDetailPage;
