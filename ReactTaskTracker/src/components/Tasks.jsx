import Task from "./Task";

function Tasks(props) {
  return (
    <>
      {props.tasks.map((task) => {
        return (
          <Task
            task={task}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        );
      })}
    </>
  );
}

export default Tasks;
