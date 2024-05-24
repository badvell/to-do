import './Input.scss';

const Input = ({ addTask, newTasks, handleKeyPress, handleInputChange }) => {
  return (
    <>
      <input
        type='text'
        placeholder='Add a new task'
        className='input__item'
        maxLength={40}
        value={newTasks}
        onKeyPress={handleKeyPress}
        onChange={handleInputChange}
      />
      <button type='button' onClick={addTask} className='input__btn'>
        +
      </button>
    </>
  );
};

export default Input;
