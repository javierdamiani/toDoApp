import './main.css';

function Main() {

    return (
      
      <div className="app">
        <div className="app-input-container">
          <input type="text" placeholder="Enter your activity" />
          <button>Add</button>
        </div>
        <div className="app-activity-container">
            <p>Activity 1</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
      </div>
    )
}

export default Main;