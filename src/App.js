import './App.css';
import AddTaskForm from './Components/AddTaskForm';
import ToDoList from './Components/ToDoList';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<AddTaskForm />
				<ToDoList />
			</header>
		</div>
	);
}

export default App;
