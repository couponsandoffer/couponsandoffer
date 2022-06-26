import React, { useEffect, useState } from "react";
import firebase from "./firebase";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const offerRefs = firebase
  .firestore()
  .collection("offers")
  .orderBy("date", "desc");

function Home() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastOffer, setLastOffer] = useState();

  useEffect(() => {
    setLoading(true);
    offerRefs
      .limit(20)
      .get()
      .then((collections) => {
        updateState(collections);
      });
    /*
      ref.onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setOffers(items);
        setLoading(false);
      });
      */
  }, []);

  const updateState = (collections) => {
    const items = [];
    collections.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    setOffers((offers) => [...offers, ...items]);
    setLoading(false);
    const lastDoc = collections.docs[collections.docs.length - 1];
    setLastOffer(lastDoc);
  };

  const fetchMore = () => {
    offerRefs
      .startAfter(lastOffer)
      .limit(7)
      .get()
      .then((collections) => {
        updateState(collections);
      });
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <InfiniteScroll
          dataLength={offers.length}
          next={fetchMore}
          hasMore={true}
          loader={
            <div className="d-flex justify-content-center">
              <h4> Loading... </h4>
            </div>
          }
        >
          <div className="m-3 p-2">
            <div className="row">
              {offers.map((offer, index) => (
                <div className="col-sm-6 col-md-3 col-lg-2 d-flex align-items-stretch justify-content-center my-1 py-1 pb-2">
                  <div className="card hover-shadow">
                    <div
                      className="d-flex justify-content-center bg-image hover-zoom ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={offer.img}
                        alt={offer.title}
                        height={"250px"}
                        width={"250px"}
                        className="img-fluid"
                      />
                    </div>
                    <div className="card-body"></div>
                    <p className="text-center card-title">
                      <b>{`${offer.title.substring(0, 35)}..`}</b>
                    </p>
                    <Link to={`/product/${offer.id}`} class="btn btn-primary">
                      Get This Deal
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
}

export default Home;
