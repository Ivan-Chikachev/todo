import React, {Component} from 'react';

export default class Task extends Component {
    state = {
        done: false
    }
    onTaskClick = () => {
        this.setState(({done}) => {
            return {done: !done}
        })
    }


    render() {
        let {done} = this.state
        let classNameLabel = 'completed'
        if (done) classNameLabel = ''



        const {id, name, deleteTask} = this.props
        return (
            <li className={classNameLabel}>
                <div className="view">
                    <input className="toggle" type="checkbox"/>
                    <label>
                        <span
                            onClick={this.onTaskClick}
                            className="description">{name}</span>
                        <span className="created">created 127 seconds ago</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button
                        onClick={() => deleteTask(id)}
                        className="icon icon-destroy"></button>
                </div>
                <input type="text" className="edit"/>
            </li>
        );
    }
}

