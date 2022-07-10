import { React, useState } from "react";
import "../App.css";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="gooey">
          <span className="dot"></span>
          <span className="dots"></span>
        </div>
      </div>
    </div>
  );
};

const withLoading = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <Loading msg={loadingMessage} />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  }
  return HOC;
};

export default withLoading;
