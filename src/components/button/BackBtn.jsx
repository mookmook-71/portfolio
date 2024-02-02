import { Link } from "react-router-dom";

function BackBtn({ redirectPath }) {
  return (
    <button className="btn btn-icon back-btn">
      <Link to={redirectPath}>{"<"} Back</Link>
    </button>
  );
}

export default BackBtn;
