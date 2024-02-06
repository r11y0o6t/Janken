// GestureButton.jsx

const GestureButton = ({ gesture, onGestureClick }) => (
    <span className="gesture" onClick={() => onGestureClick(gesture)}>
      {gesture}
    </span>
  );
  
  export default GestureButton;
  