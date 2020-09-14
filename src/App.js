import React, { useState, useEffect } from 'react';
import './App.css';

//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Toast from './components/Toast';

function App() {
	//useState
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [toast, setToast] = useState({
		message: '',
		duration: '',
		visibility: 'hidden-toast',
	});

	//useEffect
	useEffect(() => {
		getLocalTodos();
	}, []);
	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, filter]);

	//functions
	const showToast = (message, duration) => {
		if (toast.visibility === 'hidden-toast') {
			setToast({
				message: message,
				duration: duration,
				visibility: 'visible-toast',
			});
			setTimeout(() => {
				setToast({
					message: message,
					duration: duration,
					visibility: 'hidden-toast',
				});
			}, duration);
		}
	};
	const filterHandler = () => {
		switch (filter) {
			case 'completed':
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	const saveLocalTodos = () => {
		localStorage.setItem('todos', JSON.stringify(todos));
	};
	const getLocalTodos = () => {
		if (localStorage.getItem('todos') === null) {
			localStorage.setItem('todos', JSON.stringify([]));
		} else {
			let localTodos = JSON.parse(localStorage.getItem('todos'));
			setTodos(localTodos);
		}
	};

	return (
		<div className='App'>
			<Toast toast={toast} />
			<header>
				<h1>Lista de Tareas</h1>
			</header>
			<Form
				inputText={inputText}
				setInputText={setInputText}
				todos={todos}
				setTodos={setTodos}
				setFilter={setFilter}
				showToast={showToast}
			/>
			<TodoList
				todos={todos}
				setTodos={setTodos}
				filteredTodos={filteredTodos}
			/>
		</div>
	);
}

export default App;
