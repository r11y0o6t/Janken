// main.jsx

const gestures = ["✊", "✌️", "✋"];

const GestureButton = ({ gesture, onGestureClick }) => (
  <span className="gesture" onClick={() => onGestureClick(gesture)}>
    {gesture}
  </span>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedGesture: null,
    };
  }

  handleGestureClick = (gesture) => {
    this.setState({ selectedGesture: gesture });
  };

  render() {
    return (
      <div>
        <div id="app">
          <div id="gestureContainer">
            {gestures.map((gesture) => (
              <GestureButton
                key={gesture}
                gesture={gesture}
                onGestureClick={this.handleGestureClick}
              />
            ))}
          </div>
        </div>
        {this.state.selectedGesture && (
          <p>You selected: {this.state.selectedGesture}</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

<Footer>

  
</Footer>