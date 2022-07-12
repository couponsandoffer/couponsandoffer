import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import InfiniteScroll from "react-infinite-scroll-component";
import { Posts } from "../components/Posts";
import withLoading from "../components/Loading";

const offerRefs = firebase
  .firestore()
  .collection("offers")
  .orderBy("date", "desc");

function Home(props) {
  const [offers, setOffers] = useState([]);
  const [lastOffer, setLastOffer] = useState();
  const { setLoading } = props;

  useEffect(() => {
    offerRefs
      .limit(20)
      .get()
      .then((collections) => {
        updateState(collections);
      });
  }, []);

  const updateState = (collections) => {
    var items = [];
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
      <InfiniteScroll
        dataLength={offers.length}
        next={fetchMore}
        hasMore={true}
        loader={<div className="d-flex justify-content-center"></div>}
      >
        <Posts offers={offers} />
      </InfiniteScroll>
    </div>
  );
}

export default withLoading(Home);
