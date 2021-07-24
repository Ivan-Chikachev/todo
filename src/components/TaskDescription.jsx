import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const TaskDescription = ({ totalSec }) => {
    const [count, setCount] = useState(totalSec);
    const [isStart, setIsStart] = useState(true);

    const runTimer = () => {
        if (count > 0) {
            const newCount = count - 1;
            setTimeout(() => setCount(newCount), 1000);
        }
    };

    useEffect(() => {
        if (isStart) runTimer();
    }, [count, isStart]);

    const playTimer = () => setIsStart(true);
    const pauseTimer = () => setIsStart(false);
    const padTime = (time) => (String(time).length === 1 ? `0${time}` : `${time}`);

    const format = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${padTime(seconds)}`;
    };

    return (
        <span className="description">
                <button className="icon icon-play" onClick={playTimer} />
                <button className="icon icon-pause" onClick={pauseTimer} />
            {format(count)}
        </span>
    );
};
TaskDescription.propTypes = {
    totalSec: PropTypes.number.isRequired,
};
export default TaskDescription;
