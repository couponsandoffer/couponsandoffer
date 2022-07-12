import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../firebase";
import withLoading from "../components/Loading";

const Product = () => {
  const _id = useParams().id;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const ref = firebase.firestore().collection("offers").doc(_id);
    const getProduct = () => {
      ref.get().then((snapshot) => {
        const docData = snapshot.data();
        setProduct(docData);
      });
    };
    getProduct();
  }, []);

  return (
    <div>
      <div classNameName="container">
        <div classNameName="mt-2 pt-2 ">
          <div className="card mb-3" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={product.img}
                  alt={product.title}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div></div>
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.body}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      Updated: {`${new Date(product.date).toLocaleString()}`}
                    </small>
                  </p>
                  <div className="d-flex justify-content-start">
                    <div className="m-1 p-1">
                      <a href={product.link} class="btn btn-primary">
                        BUY NOW
                      </a>
                    </div>
                    <div className="m-1 p-1">
                      <a
                        href="https://telegram.me/newcouponandcode"
                        class="btn btn-primary"
                      >
                        <i class="far fa-paper-plane"> JOIN US </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 p-2">
          <h4> Disclaimer </h4>
          <ul>
            <li>
              <b>
                Due to "different sellers" or "offer ended," you could
                occasionally encounter variations in product prices.
              </b>
            </li>
            <li>
              <b>
                As of the date/time specified above, the product prices and
                availability were correct, but they are liable to change. This
                product can be purchased using any pricing and availability
                details that are listed on the merchant's website at the time of
                purchase.
              </b>
            </li>
            <li>
              <b>
                The quality, usability, safety, morality, or legality of any
                component of the items advertised, the truth or correctness of
                the listings, or the capacity of sellers to sell items or
                respect their coupon or promotion are all things that{" "}
                <a href="https://couponsandoffer.in">couponsandoffer.in</a> has
                no control over and does not guarantee or warrant.
              </b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withLoading(Product);
