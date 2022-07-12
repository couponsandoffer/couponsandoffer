import { Card } from "./Card";

export const Posts = ({ offers }) => {
  return (
    <div className="m-3 p-2">
      <div className="row">
        {offers.map((offer, index) => (
          <div className="col-sm-6 col-md-3 col-lg-2 " key={index}>
            <div>
              <Card id={offer.id} title={offer.title} img={offer.img} />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};
