import React from 'react';

const Form = ({
	inputText,
	setInputText,
	todos,
	setTodos,
	setFilter,
	showToast,
}) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (isEmpty(inputText) /*inputText === ''*/) {
			showToast('El texto está vacío', 1400);
		} else {
			setTodos([
				...todos,
				{ text: inputText, completed: false, id: Date.now().toString() },
			]);
			setInputText('');
		}
	};
	const filterHandler = (e) => {
		setFilter(e.target.value);
	};
	const isEmpty = (text) => {
		return !text || !text.trim();
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
					<option value='all'>Todas</option>
					<option value='completed'>Completadas</option>
					<option value='uncompleted'>Pendientes</option>
				</select>
			</div>
		</form>
	);
};

export default Form;
