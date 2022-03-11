import { useHistory } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const CarrotButtons = () => {
  const history = useHistory();

  return (
    <>
      <div id="top-left-buttons">
        <button className="button-none" onClick={(e) => history.goBack()}>
          <h2>
            <FaAngleLeft />
          </h2>
        </button>
        <button className="button-none" onClick={(e) => history.goForward()}>
          <h2>
            <FaAngleRight />
          </h2>
        </button>
      </div>
    </>
  );
};
