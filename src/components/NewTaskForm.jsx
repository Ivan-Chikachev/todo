import React, { useContext, useState } from 'react';
import TodoContext from '../TodoContext';

const NewTaskForm = () => {
    const [labelName, setLabelName] = useState('');
    const [labelMin, setLabelMin] = useState('');
    const [labelSec, setLabelSec] = useState('');
    const { addTask } = useContext(TodoContext);

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

export default NewTaskForm;
