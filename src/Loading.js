import { React } from "react";

const Loading = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div
          class="spinner-grow text-primary"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
