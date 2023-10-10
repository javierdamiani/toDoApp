import "./popup.css";
import { BsXLg } from "react-icons/bs";

function Popup(props) {
  function togglePopup() {
    props.setPopupVisible(!props.popupVisible);
  }

  return props.popupVisible ? (
    <>
      <div className="opacity" onClick={() => props.togglePopup}></div>
      <div className="popup">
        <BsXLg className="popup__button_close-icon" onClick={togglePopup} />
      </div>
    </>
  ) : (
    <div className="popup__hidden"></div>
  );
}

export default Popup;
