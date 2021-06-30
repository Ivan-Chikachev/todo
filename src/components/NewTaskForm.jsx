import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: ''
  };

  static propTypes = {
    addTask: PropTypes.func
  };

  static defaultProps = {
    addTask: () => {
    }
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onLabelSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({ label: '' });
  };

  render() {
    return (
      <form
        action=""
        onSubmit={this.onLabelSubmit}
      >
        <input
          onChange={this.onLabelChange}
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.label}
        />
      </form>
    );
  }
}
