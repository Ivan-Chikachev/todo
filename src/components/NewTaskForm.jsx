import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
    state = {
        label: '',
        labelMin: '',
        labelSec: '',
    };

    static propTypes = {
        addTask: PropTypes.func,
    };

    static defaultProps = {
        addTask: () => {
        },
    };

    onLabelChangeTitle = (e) => {
        this.setState({
            label: e.target.value,
        });
    };

    onLabelChangeMin = (e) => {
        e.target.value = e.target.value.replace(/[^\d.]/g, '');
        this.setState({
            labelMin: e.target.value,
        });
    };

    onLabelChangeSec = (e) => {
        e.target.value = e.target.value.replace(/[^\d.]/g, '');
        this.setState({
            labelSec: e.target.value,
        });
    };

    onLabelSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.label, this.state.labelMin, this.state.labelSec);
        this.setState({ label: '', labelMin: '', labelSec: '' });
    };

    render() {
        return (
            <form
                action=""
                onSubmit={this.onLabelSubmit}
                className="new-todo-form"
            >
                <input
                    onChange={this.onLabelChangeTitle}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={this.state.label}
                />
                <input
                    onChange={this.onLabelChangeMin}
                    className="new-todo-form__timer"
                    placeholder="Min"
                    value={this.state.labelMin}
                    maxLength="3"
                    minLength="1"
                />
                <input
                    onChange={this.onLabelChangeSec}
                    className="new-todo-form__timer"
                    placeholder="Sec"
                    value={this.state.labelSec}
                    maxLength="2"
                    minLength="1"
                />
                <input
                    type="submit"
                    value="ok"
                    onSubmit={this.onLabelSubmit}
                />
            </form>
        );
    }
}
