import firebase from "./firebase";
import React, { useEffect, useState } from "react";

function AddOffer() {
  const [inputs, setInputs] = useState([]);
  const [outputId, setOutputId] = useState(null);
  const [output, setOutput] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  async function addoffer(offer) {
    const { id } = await firebase.firestore().collection("offers").add(offer);
    setOutputId(id);
    const copymsg = inputs.title + "\n" + inputs.body + "\n";
    const productlink = "https://couponsandoffer.github.io/product/" + outputId;
    setOutput(copymsg + productlink);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = new Date().getTime();
    setInputs((values) => ({ ...values, ["date"]: value }));
    addoffer(inputs);
  };

  return (
    <div className="container-fluid">
      <textarea class="form-control" rows="4"></textarea>
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
      <textarea
        class="form-control"
        value={outputId !== null ? output : ""}
        rows="4"
      ></textarea>
    </div>
  );
}

export default AddOffer;
