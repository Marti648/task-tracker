import { useState } from "react";

function AddForm(props) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const newTask = { text, day, reminder };
    props.addTask(newTask);
    setText("");
    setDay("");
    setReminder(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        />
      </div>

      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          placeholder="Time"
          onChange={(e) => {
            setDay(e.target.value);
          }}
          value={day}
        />
      </div>

      <div className="form-control form-control-check">
        <label htmlFor="">Set reminder</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setReminder(e.currentTarget.checked);
          }}
          value={reminder}
          checked={reminder}
        />
      </div>

      <input class="btn btn-block" type="Submit" value="Save task" />
    </form>
  );
}

export default AddForm;
