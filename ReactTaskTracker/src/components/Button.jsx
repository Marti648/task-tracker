function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  color: "bluesteel"
};

export default Button;
