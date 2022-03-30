import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getOffers = () => {
      const ref = firebase
        .firestore()
        .collection("offers")
        .orderBy("date", "desc");
      setLoading(true);
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setOffers(items);
        setLoading(false);
      });
    };
    getOffers();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="row">
            {offers.map((offer, index) => (
              <div className="col-sm-12 col-md-3 d-flex align-items-stretch my-1 py-1 pb-2">
                <div className="card hover-shadow">
                  <div
                    className="bg-image hover-zoom ripple"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={offer.img}
                      alt={offer.title}
                      className="img-fluid"
                    />
                  </div>
                  <div className="card-body"></div>
                  <h5 className="text-center card-title">{offer.title}</h5>
                  <Link to={`/product/${offer.id}`} class="btn btn-primary">
                    Get This Deal
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
