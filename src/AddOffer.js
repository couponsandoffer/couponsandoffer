import firebase from "./firebase";
import React, { useEffect, useState } from "react";

function AddOffer() {
  const [inputs, setInputs] = useState([]);
  const [output, setOutput] = useState(null);
  const ref = firebase.firestore().collection("offers");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  function addoffer(offer) {
    ref
      .doc(offer.id)
      .set(offer)
      .catch((err) => {
        console.error(err);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = new Date().getTime();
    setInputs((values) => ({ ...values, ["date"]: value }));
    addoffer(inputs);
    const copymsg = inputs.title + "\n" + inputs.body + "\n";
  };

  return (
    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
        <div className="d-flex form-outline flex-column justify-content-center">
          <div className="form-group">
            <label>
              Title:
              <input type="text" onChange={handleChange} name="title" />
            </label>
          </div>
          <div className="form-group">
            <label>
              body:
              <input type="text" onChange={handleChange} name="body" />
            </label>
          </div>
          <div>
            <label className="form-group">
              Image Link:
              <input type="text" onChange={handleChange} name="img" />
            </label>
          </div>
          <div className="form-group">
            <label>
              Affilate Link:
              <input type="text" onChange={handleChange} name="link" />
            </label>
          </div>
          <input className="btn btn-primary" type="submit" />
        </div>
      </form>
      <input type="text" value="JJSDF" />
    </div>
  );
}

export default AddOffer;
