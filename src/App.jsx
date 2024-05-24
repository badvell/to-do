import { useState, useEffect } from 'react';

import Input from './components/Input';
import Todo from './components/Todo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState('');

  useEffect(() => {
    if (tasks.length === 0) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleInputChange = (evt) => {
    setNewTasks(evt.target.value);
  };

  const addTask = () => {
    newTasks === ''
      ? null
      : setTasks([...tasks, { newTasks, completed: false }]);

    setNewTasks('');
  };

  const handleKeyPress = (evt) => {
    evt.key === 'Enter' ? addTask() : null;
  };

  const toggleTaskCompleted = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className='app'>
      <Input
        addTask={addTask}
        newTasks={newTasks}
        handleKeyPress={handleKeyPress}
        handleInputChange={handleInputChange}
      />

      <main>
        <Todo
          tasks={tasks}
          toggleTaskCompleted={toggleTaskCompleted}
          deleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;
