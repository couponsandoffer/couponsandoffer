import { Card } from "./Card";

export const Posts = ({ offers }) => {
  return (
    <div className="m-3 p-2">
      <div className="row">
        {offers.map((offer, index) => (
          <div key={index}>
            <div className="col-sm-6 col-md-3 col-lg-2 d-flex align-items-stretch justify-content-center my-1 py-1 pb-2">
              <Card id={offer.id} title={offer.title} img={offer.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
