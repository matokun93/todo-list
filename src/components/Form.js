import React from 'react';
import nextId from 'react-id-generator';

const Form = ({ inputText, setInputText, todos, setTodos, setFilter }) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		setTodos([...todos, { text: inputText, completed: false, id: nextId() }]);
		setInputText('');
	};
	const filterHandler = (e) => {
		setFilter(e.target.value);
	};

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type='text'
				className='todo-input'
			/>
			<button onClick={submitHandler} className='todo-button' type='submit'>
				<i className='fas fa-plus-square'></i>
			</button>
			<div className='select'>
				<select onChange={filterHandler} name='todos' className='filter-todo'>
					<option value='all'>All</option>
					<option value='completed'>Completed</option>
					<option value='uncompleted'>Uncompleted</option>
				</select>
			</div>
		</form>
	);
};

export default Form;