import { React } from "react";
import img from "./assets/images/campaign-creators-OGOWDVLbMSc-unsplash.jpg";

const About = () => {
  return (
    <div className="m-2 p-2">
      <div className="row">
        <div className="col-md-8">
          <h1 className=" display-4 text-center"> Our Goal </h1>
          <p className="lead">
            To give the most efficient and proven offers data to make eshoppers'
            lives easier and to assist them buy for less.{" "}
            <b>couponsandoffers</b> is a website that provides useful offers,
            coupons, and deals, as the name suggests. The key job in this
            e-commerce era is to identify effective offers with least effort.
            Our primary goal is to give shoppers with better and more efficient
            deals, and we are working hard to achieve this. We've tried to cater
            as many ecommerce brad Offers, discounts, and deals as possible in
            order to achieve the aforementioned objectives. We have 1500+ offers
            from prominent stores like Amazon, Flipkart, Snapdeal, Paytm, and
            Ebay as part of our ongoing efforts.
          </p>
          <p className="text-muted">
            What are our options? We take the greatest offers, promo codes, and
            coupon codes, verify them, and then list them for you. We always aim
            to discover the most up-to-date and reliable discounts, with no
            extraneous information or bloat, simply basic and straightforward
            offers to utilise in the following categories. Recharge coupons,
            food discounts, free charge coupons, hotel booking discounts, flight
            booking discounts, and much more are all available.
          </p>
          <p className="text-muted">
            Only the best coupons, deals, and offers will be provided. We
            Despise Spam Just Like You Do! Our goal is to deliver offers and
            coupons in such a nice and smooth style, with a seamless app and
            online experience, that you will be glad to visit our platform
            without any spams or excessive details, just simple details that
            users can comprehend and utilise in their everyday lives. Our Offers
            Coupons & Deals programme assists you in locating the finest online
            store deals.
          </p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <div className="bg-image hover-zoom">
            <img
              src={img}
              alt="couponsandoffer"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
