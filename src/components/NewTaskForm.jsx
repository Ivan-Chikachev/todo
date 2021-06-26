import React, {Component} from 'react';

export default class NewTaskForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onLabelSubmit = (e) => {
        e.preventDefault()
        this.props.addTask(this.state.label)
        this.setState({label: ''})
    }

    render() {
        return (
            <form action=""
                  onSubmit={this.onLabelSubmit}>
                <input onChange={this.onLabelChange}
                       className="new-todo"
                       placeholder="What needs to be done?"
                       autoFocus
                       value={this.state.label}/>
            </form>
        );
    }
}
NewTaskForm.defaultProps = {
    addTask: () => {}
}

