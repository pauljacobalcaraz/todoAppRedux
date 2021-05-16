import React from 'react';
import { connect } from 'react-redux';
import ToDo from './ToDo';

class ToDoList extends React.Component {
	render() {
		return (
			<>
				<>
					<div>
						<h2>Pending</h2>
						{this.props.tasks
							.filter((task) => task.status === 'Pending')
							.map((task) => (
								<ToDo key={task.id} task={task} />
							))}
					</div>
					<div>
						<h2>Done</h2>
						{this.props.tasks
							.filter((task) => task.status === 'Done')
							.map((task) => (
								<ToDo key={task.id} task={task} />
							))}
					</div>
				</>
			</>
		);
	}
}
const mapStateToProps = (store) => {
	return {
		tasks: store.tasks,
	};
};

export default connect(mapStateToProps)(ToDoList);
