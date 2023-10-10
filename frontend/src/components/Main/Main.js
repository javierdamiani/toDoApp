import "./main.css";
import ToDo from "../ToDo/ToDo";

function Main(props) {
  return (
    <div className="app">
      <h1 className="app__title">ToDo App</h1>
      <div className="app__container">
        <input
          className="app__container-input"
          type="text"
          placeholder="Enter your activity"
        />
        <div className="add">Add</div>
      </div>
      <div className="app__list">
        <ToDo text="Hola" setPopupVisible={props.setPopupVisible} />
        {/* <ToDo text="Texto" />
        <ToDo text="Test" /> */}
      </div>
    </div>
  );
}

export default Main;
