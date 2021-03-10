import React from 'react';
import { connect } from 'react-redux';

class ToDo extends React.Component {
	btnDone = () => {
		let doneTask = {
			id: this.props.task.id,
			name: this.props.task.name,
			status: 'Done',
		};
		this.props.markDoneTask(doneTask);
	};
	render() {
		return (
			<>
				<button onClick={() => this.props.deleteTask(this.props.task.id)}>
					x
				</button>
				{this.props.task.name + ' ' + this.props.task.status}{' '}
				<button onClick={this.btnDone}>Done</button>
				<hr />
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteTask: (id) => dispatch({ type: 'DELETE_TASK', payload: id }),
		markDoneTask: (doneTask) =>
			dispatch({ type: 'DONE_TASK', payload: doneTask }),
	};
};

export default connect(null, mapDispatchToProps)(ToDo);
