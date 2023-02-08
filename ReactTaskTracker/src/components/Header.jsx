import Button from "./Button.jsx";

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button
        onClick={props.onAdd}
        color={props.showAdd ? "red" : "green"}
        text={props.showAdd ? "Close" : "Add"}
      />
    </header>
  );
}

Header.defaultProps = {
  title: "Task Tracker"
};

export default Header;
