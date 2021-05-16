import './App.css';
import AddTaskForm from './Components/AddTaskForm';
import ToDoList from './Components/ToDoList';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<AddTaskForm />
				<div className=' col-10 d-flex justify-content-around'>
					<ToDoList />
				</div>
			</header>
		</div>
	);
}

export default App;
