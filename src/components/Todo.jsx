import './Todo.scss';

const Todo = ({ tasks, toggleTaskCompleted, deleteTask }) => {
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className='todo'>
      <h1 className='todo__text'>
        Tasks to do {tasks.length <= 0 ? '' : tasks.length}
      </h1>
      {tasks.map((task, id) => (
        <ul key={id} className='todo__list'>
          <li
            className={
              task.completed
                ? 'todo__list-item todo__list-done'
                : 'todo__list-item'
            }
          >
            <p className='todo__list-item_text'>{task.newTasks}</p>
            <div className='todo__wrapper'>
              <button
                type='button'
                onClick={() => toggleTaskCompleted(id)}
                className='todo__btn todo__btn-done'
              ></button>
              <button
                type='button'
                onClick={() => deleteTask(id)}
                className='todo__btn todo__btn-delete'
              ></button>
            </div>
          </li>
        </ul>
      ))}
      <h2 className='todo__text'>
        {completedTasksCount <= 0 ? '' : `Done - ${completedTasksCount}`}
      </h2>
    </div>
  );
};

export default Todo;
