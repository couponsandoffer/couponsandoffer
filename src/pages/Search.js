import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import firebase from "../firebase";
import withLoading from "../components/Loading";
import { Posts } from "../components/Posts";

const offerRefs = firebase
  .firestore()
  .collection("offers")
  .orderBy("date", "desc");

const Search = (props) => {
  const queryParam = new URLSearchParams(useLocation().search)
    .get("q")
    .toString();
  const [offers, setOffers] = useState([]);
  const { setLoading } = props;
  useEffect(() => {
    setLoading(true);
    offerRefs
      .limit(553)
      .get()
      .then((collections) => {
        var items = [];
        collections.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        queryParam
          .split(" ")
          .forEach(
            (query) =>
              (items = items.filter((item) =>
                item.title.match(new RegExp(`\\b${query}\\b`, "gi"))
              ))
          );

        setOffers((offers) => [...items]);
        setLoading(false);
      });
  }, [queryParam]);
  return (
    <div>
      <Posts offers={offers} />
    </div>
  );
};

export default withLoading(Search);
