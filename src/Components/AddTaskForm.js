import React from 'react';
import { connect } from 'react-redux';

class AddTaskForm extends React.Component {
	state = {
		name: '',
		status: 'Pending',
		requiredMessage: '',
	};

	btnAddNewTask = () => {
		if (this.state.name === '') {
			this.setState({
				requiredMessage: 'Invalid Input',
			});
			return;
		}
		let newTask = {
			name: this.state.name.trim(),
			status: this.state.status,
		};
		this.props.addTask(newTask);
		this.setState({
			name: '',
		});
	};
	render() {
		return (
			<>
				<div>
					New Task:{' '}
					<input
						type='text'
						value={this.state.name}
						onChange={(e) =>
							this.setState({ name: e.target.value, requiredMessage: '' })
						}
					/>
					{this.state.requiredMessage}
					<button
						onClick={this.btnAddNewTask}
						className='btn btn-primary mb-2 ml-2'
					>
						Add new task
					</button>
				</div>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (newTask) => dispatch({ type: 'ADD_TASK', payload: newTask }),
	};
};

export default connect(null, mapDispatchToProps)(AddTaskForm);
