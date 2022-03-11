import { useHistory } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const CarrotButtons = () => {
  const history = useHistory();

  return (
    <>
      <div id="top-left-buttons">
        <button className="button-none" onClick={(e) => history.goBack()}>
          <h3>
            <FaAngleLeft />
          </h3>
        </button>
        <button className="button-none" onClick={(e) => history.goForward()}>
          <h3>
            <FaAngleRight />
          </h3>
        </button>
      </div>
    </>
  );
};
