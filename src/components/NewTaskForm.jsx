import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ addTask }) => {
    const initialState = {
        labelName: '',
        labelMin: '',
        labelSec: '',
    };

    const [labelName, setLabelName] = useState(initialState.labelName);
    const [labelMin, setLabelMin] = useState(initialState.labelMin);
    const [labelSec, setLabelSec] = useState(initialState.labelSec);

    const onLabelChangeTitle = (e) => {
        setLabelName(e.target.value);
    };

    const onLabelChangeMin = (e) => {
        const value = e.target.value.replace(/[^\d.]/g, '');
        setLabelMin(Number(value));
    };

    const onLabelChangeSec = (e) => {
        const value = e.target.value.replace(/[^\d.]/g, '');
        setLabelSec(Number(value));
    };

    const onLabelSubmit = (e) => {
        e.preventDefault();
        addTask(labelName, labelMin, labelSec);
        setLabelName('');
        setLabelMin('');
        setLabelSec('');
    };
    return (
        <form
            action=""
            onSubmit={onLabelSubmit}
            className="new-todo-form"
        >
            <input
                onChange={onLabelChangeTitle}
                className="new-todo"
                placeholder="What needs to be done?"
                value={labelName}
            />
            <input
                onChange={onLabelChangeMin}
                className="new-todo-form__timer"
                placeholder="Min"
                value={labelMin}
                maxLength="3"
                minLength="1"
            />
            <input
                onChange={onLabelChangeSec}
                className="new-todo-form__timer"
                placeholder="Sec"
                value={labelSec}
                maxLength="2"
                minLength="1"
            />
            <input
                type="submit"
                value="ok"
                onSubmit={onLabelSubmit}
            />
        </form>
    );
};

NewTaskForm.defaultProps = {
    addTask: () => {
    },
};

NewTaskForm.propTypes = {
    addTask: PropTypes.func,
};

export default NewTaskForm;
