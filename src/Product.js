import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "./firebase";
import Loading from "./Loading";

const Product = () => {
  const _id = useParams().id;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const ref = firebase.firestore().collection("offers").doc(_id);
    const getProduct = () => {
      ref.get().then((snapshot) => {
        const docData = snapshot.data();
        setProduct(docData);
        setLoading(false);
      });
    };
    getProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
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
        </div>
      )}
    </div>
  );
};

export default Product;
