import { Link } from "react-router-dom";

export const Card = ({ id, title, img }) => {
  return (
    <div key={id}>
      <div className="card hover-shadow">
        <div
          className="d-flex justify-content-center bg-image hover-zoom ripple"
          data-mdb-ripple-color="light"
        >
          <img
            src={img}
            alt={title}
            height={"250px"}
            width={"250px"}
            className="img-fluid"
          />
        </div>
        <div className="card-body"></div>
        <p className="text-center card-title">
          <b>{`${title.substring(0, 35)}..`}</b>
        </p>
        <Link to={`/product/${id}`} class="btn btn-primary">
          Get This Deal
        </Link>
      </div>
    </div>
  );
};
