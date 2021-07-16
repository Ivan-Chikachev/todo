import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskDescription extends Component {
    state = {
        counter: 0,
        isStart: true,
    }

    static propTypes = {
        totalSec: PropTypes.number.isRequired,
    }

    componentDidMount() {
        this.setState({ counter: this.props.totalSec });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.isStart) {
            if (prevState.counter !== this.state.counter) {
                this.runTimer();
            }
        }
        if (prevState.isStart !== this.state.isStart) {
            this.runTimer();
        }
    }

    runTimer = () => {
        let timer;
        if (this.state.counter > 0) {
            timer = setTimeout(() => this.setCounter(this.state.counter), 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }

    setCounter = (count) => {
        this.setState({ counter: --count });
    }

    playTimer = () => {
        this.setState({ isStart: true });
    }

    pauseTimer = () => {
        this.setState({ isStart: false });
    }

    padTime = (time) => (String(time).length === 1 ? `0${time}` : `${time}`);

    format = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${this.padTime(seconds)}`;
    };

    render() {
        const { counter } = this.state;
        return (
            <span className="description">
                <button className="icon icon-play" onClick={this.playTimer} />
                <button className="icon icon-pause" onClick={this.pauseTimer} />
                {this.format(counter)}
            </span>
        );
    }
}
