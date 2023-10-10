import React from "react";
import Main from "./components/Main/Main.js";
import Popup from "./components/Popup/Popup.js";

function App() {
  const [popupVisible, setPopupVisible] = React.useState(false);

  return (
    <div className="page">
      {/* <Header /> */}
      <Main popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
      <Popup popupVisible={popupVisible} setPopupVisible={setPopupVisible} />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
